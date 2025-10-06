import { initDb } from "../db";

// Define a type for your question row from the database
type QuestionRow = {
    id: number;
    question: string;
    options: string; // stored as JSON string in DB
    correctOption: number;
};

export async function getQuizQuestions() {
    const db = await initDb();
    const rows: QuestionRow[] = await db.all("SELECT * FROM questions");

    return rows.map(row => ({
        id: row.id,
        question: row.question,
        options: JSON.parse(row.options) as string[]
    }));
}

export async function calculateScore(answers: Record<number, number>) {
    const db = await initDb();
    const rows: QuestionRow[] = await db.all("SELECT * FROM questions");
    let score = 0;

    const review = rows.map(row => {
        const userAnswer = answers[row.id];
        const isCorrect = userAnswer === row.correctOption;
        if (isCorrect) score++;
        return {
            id: row.id,
            question: row.question,
            userAnswer,
            correctAnswer: row.correctOption,
            isCorrect
        };
    });

    return { score, total: rows.length, review };
}
