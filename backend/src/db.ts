import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const DB_PATH = path.resolve(__dirname, "../../quiz.db");

export async function initDb() {
    const db = await open({
        filename: DB_PATH,
        driver: sqlite3.Database
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question TEXT,
      options TEXT,
      correctOption INTEGER
    )
  `);

    const row = await db.get<{ count: number }>("SELECT COUNT(*) as count FROM questions");
    if (row?.count === 0) {
        const stmt = await db.prepare("INSERT INTO questions (question, options, correctOption) VALUES (?, ?, ?)");
        await stmt.run("What is the capital of France?", JSON.stringify(["Paris", "London", "Berlin", "Madrid"]), 0);
        await stmt.run("Which language runs in a web browser?", JSON.stringify(["Java", "C", "Python", "JavaScript"]), 3);
        await stmt.run("Who developed React?", JSON.stringify(["Google", "Facebook", "Microsoft", "Twitter"]), 1);
        await stmt.finalize();
        console.log("✅ Database seeded with questions");
    }

    return db;
}
