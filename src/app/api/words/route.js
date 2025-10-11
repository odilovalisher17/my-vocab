import db from "@/lib/db";

// ------------------------------ Get a Word --------------------------------
export async function GET(request) {
  // const { searchParams } = new URL(request.url);
  // const word = searchParams.get("word");
  const stmt = db.prepare(`
      select
        *
      from words
      where used = (select min(used) from words)
      order by random()
      limit 1
  `);
  const result = stmt.get();

  const updateWord = db.prepare(`
        update words
          set used = ?
        where id = ?
  `);

  updateWord.run(result.used + 1, result.id);

  return Response.json(result);
}

// ------------------------------ Add word --------------------------------
export async function POST(req) {
  const { word, type, translation, definition, example } = await req.json();

  const check_stmt = db.prepare("SELECT 1 FROM words WHERE word = ?");
  const check_result = check_stmt.get(word);

  if (!!check_result) {
    return Response.json({ error: "Word Already exists" }, { status: 400 });
  } else {
    const stmt = db.prepare(`
    INSERT INTO words (word, type, translation, definition, example, used)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

    const result = stmt.run(
      word.toLowerCase().trim(),
      type,
      translation.trim(),
      definition.trim(),
      example.trim(),
      0
    );
    return Response.json({ success: true, id: result.lastInsertRowid });
  }
}
