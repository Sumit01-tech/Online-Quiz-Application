"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = initDb;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sqlite_1 = require("sqlite");
const path_1 = __importDefault(require("path"));
const DB_PATH = path_1.default.resolve(__dirname, "../../quiz.db");
function initDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, sqlite_1.open)({
            filename: DB_PATH,
            driver: sqlite3_1.default.Database
        });
        yield db.exec(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      question TEXT,
      options TEXT,
      correctOption INTEGER
    )
  `);
        const row = yield db.get("SELECT COUNT(*) as count FROM questions");
        if ((row === null || row === void 0 ? void 0 : row.count) === 0) {
            const stmt = yield db.prepare("INSERT INTO questions (question, options, correctOption) VALUES (?, ?, ?)");
            yield stmt.run("What is the capital of France?", JSON.stringify(["Paris", "London", "Berlin", "Madrid"]), 0);
            yield stmt.run("Which language runs in a web browser?", JSON.stringify(["Java", "C", "Python", "JavaScript"]), 3);
            yield stmt.run("Who developed React?", JSON.stringify(["Google", "Facebook", "Microsoft", "Twitter"]), 1);
            yield stmt.finalize();
            console.log("✅ Database seeded with questions");
        }
        return db;
    });
}
