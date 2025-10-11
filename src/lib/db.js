import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// ensure folder exists
const dbPath = path.join(process.cwd(), "src/data/quiz.db");
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

// connect to existing DB (no table creation)
const db = new Database(dbPath);

export default db;
