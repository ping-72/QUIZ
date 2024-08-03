import express from 'express';
import Question from '../Models/questions.js';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.json());

// Fetch random questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.aggregate([
      { $sample: { size: 1 } },
      { $project: { correct_answer: 0}}// Excluding the answers
    ]);
    res.json(questions);
  } catch (err) {
    res.status(500).send('Server Error, Could not repond with question '+ err);
  }
});

// check answer
router.post('/check-answer', async(req, res) =>{
  const {questionId, answer }= req.body;
  try{
    const question = await Question.findById(questionId);
    if(!question){
      return res.status(404).send('Question not found');
    }
    const isCorrect = question.correct_answer === answer;
    res.json({isCorrect});
  }  catch(e){
    res.status(500).send('Server Error' + err);
  }
})

export default router;
