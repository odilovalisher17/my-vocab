import db from "@/lib/db";

// ------------------------------ Statics --------------------------------
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get("user_id");

  const record_stmt = db.prepare(`
      select
        record
      from users
      where id = ?
  `);
  const user_record = record_stmt.get(user_id).record;

  return Response.json({
    record: user_record,
  });
}
