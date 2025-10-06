import { Router } from "express";
import { getQuestions, submitQuiz } from "../controllers/quizController";

const router = Router();

// GET all quiz questions
router.get("/", getQuestions);

// POST quiz answers
router.post("/submit", submitQuiz);

export default router;
