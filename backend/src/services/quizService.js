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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuizQuestions = getQuizQuestions;
exports.calculateScore = calculateScore;
const db_1 = require("../db");
function getQuizQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, db_1.initDb)();
        const rows = yield db.all("SELECT * FROM questions");
        return rows.map(row => ({
            id: row.id,
            question: row.question,
            options: JSON.parse(row.options)
        }));
    });
}
function calculateScore(answers) {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, db_1.initDb)();
        const rows = yield db.all("SELECT * FROM questions");
        let score = 0;
        const review = rows.map(row => {
            const userAnswer = answers[row.id];
            const isCorrect = userAnswer === row.correctOption;
            if (isCorrect)
                score++;
            return {
                id: row.id,
                question: row.question,
                userAnswer,
                correctAnswer: row.correctOption,
                isCorrect
            };
        });
        return { score, total: rows.length, review };
    });
}
