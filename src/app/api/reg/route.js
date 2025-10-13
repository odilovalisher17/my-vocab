import db from "@/lib/db";
import { NextResponse } from "next/server";

// ------------------------------ Add a User --------------------------------
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

    const res = NextResponse.redirect(new URL("/", request.url));
    // const res = NextResponse.json({ success: true });
    res.cookies.set("username", username, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return res;
  }
  return Response.json({ error: "User already exists" }, { status: 409 });
}
