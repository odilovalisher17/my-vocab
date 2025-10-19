import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user_id, word_id, answer, is_correct } = await req.json();

  const stmt = db.prepare(`
    INSERT INTO quiz_his (user_id, word_id, answer, is_correct, quiz_date)
    VALUES (?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    user_id,
    word_id,
    answer,
    is_correct ? 1 : 0,
    Math.floor(Date.now() / 1000)
  );
  return Response.json({ success: true, status: 200 });
}
