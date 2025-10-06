import { Request, Response } from "express";
import { getQuizQuestions, calculateScore } from "../services/quizService";

export const getQuestions = async (_req: Request, res: Response) => {
    const questions = await getQuizQuestions();
    res.json(questions);
};

export const submitQuiz = async (req: Request, res: Response) => {
    const { answers } = req.body;
    const result = await calculateScore(answers);
    res.json(result);
};
