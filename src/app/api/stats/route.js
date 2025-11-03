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

  const played_words_stmt = db.prepare(`
      select
        *
      from (
        select
          date(quiz_date, 'unixepoch') as date,
          count(word_id) as count,
          sum(is_correct) as correct_count
        from quiz_his
        where user_id = ?
        group by date
        order by date desc
        limit 7
      )
      order by date asc
  `);
  const played_words = played_words_stmt.all(user_id);
  console.log(played_words);

  return Response.json({
    record: user_record,
    played_words: played_words,
  });
}
