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
exports.submitQuiz = exports.getQuestions = void 0;
const quizService_1 = require("../services/quizService");
const getQuestions = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield (0, quizService_1.getQuizQuestions)();
    res.json(questions);
});
exports.getQuestions = getQuestions;
const submitQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { answers } = req.body;
    const result = yield (0, quizService_1.calculateScore)(answers);
    res.json(result);
});
exports.submitQuiz = submitQuiz;
