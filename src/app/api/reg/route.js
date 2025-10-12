import db from "@/lib/db";

// ------------------------------ Get a User --------------------------------
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const password = searchParams.get("password");

  const stmt = db.prepare(`
      select
        *
      from users
      where username = ?
  `);
  const user = stmt.get(username);

  if (!user) {
    const addUser = db.prepare(`
        insert into users (username, password, record)
        values (?, ?, ?)
  `);

    addUser.run(username, password, 0);

    return Response.json({ error: "Success" }, { status: 200 });
  }
  return Response.json({ error: "User already exists" }, { status: 409 });
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
