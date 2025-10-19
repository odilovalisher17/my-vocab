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
    return Response.json({ error: "User Not Found" }, { status: 404 });
  } else if (user.password !== password) {
    return Response.json({ error: "Invalid Credentials" }, { status: 401 });
  } else if (user.password === password) {
    return Response.json({ username: user.username, id: user.id, status: 200 });
  }
  return Response.json({ error: "Internal Server Error!" }, { status: 500 });
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
