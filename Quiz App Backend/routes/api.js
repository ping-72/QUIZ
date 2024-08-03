import express from 'express';
const router = express.Router();
import Question from '../models/questions.js';
import bodyParser from 'body-parser';

router.use(bodyParser.json()); // Parsing the body

// Fetch random 10 questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.aggregate([
        { $sample: { size: 10 } },
        { $project: { correct_answer: 0}}// Excluding the answers
    ]);
    res.json(questions);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Submit answers and check responses
router.post('/submit', async (req, res) => {
  const { responses } = req.body;
  try {
    let score = 0;
    const results = await Promise.all(responses.map(async (response) => {
      const question = await Question.findById(response.questionId);
      if (!question) {
        return { questionId: response.questionId, error: 'Question not found' };
      }
      const isCorrect = question.correct_answer === response.answer;
      if (isCorrect) score += 1;
      return { questionId: response.questionId, isCorrect, correctAnswer: question.correct_answer };
    }));
    res.status(200).json({ score, results });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;
