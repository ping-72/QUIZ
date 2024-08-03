import React, { useContext } from 'react';
import { QuizContext } from '@/Result_context/ResultContext';
import { Link } from 'react-router-dom';

const Results = () => {
     const { results } = useContext(QuizContext);

     if (!results) {
          return <div>No results to display</div>;
     }

     return (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
               <h1>Quiz Results</h1>
               <p className='text-2xl mt-3'>You have Scored: {results.score} / 10</p>

               <div className='mt-4'>
                    {results.results.map((result) => (
                         result.isCorrect ?
                              (<div className='mx-10 px-4 my-2 py-3 border flex bg-green-100 rounded-xl justify-between' key={result.questionId}>
                                   <p>Question ID: {result.question}</p>
                                   <p>Correct Answer: {result.correctAnswer}</p>
                                   <p>Your Answer: {result.isCorrect ? 'Correct' : 'Incorrect'}</p>
                              </div>) :
                              (<div className='mx-10 px-4 my-2 py-3 border flex bg-red-50 rounded-xl justify-between' key={result.questionId}>
                                   <p>Question ID: {result.question}</p>
                                   <p>Correct Answer: {result.correctAnswer}</p>
                                   <p>Your Answer: {result.isCorrect ? 'Correct' : 'Incorrect'}</p>
                              </div>)
                    ))}
               </div>
               <Link to={'/dashboard'}>
                    <div className='absolute right-14 bottom-10 border rounded-xl'>
                         <button className='border px-4 py-2 rounded-xl font-semibold bg-blue-50'>Return to Dashboard</button>
                    </div>
               </Link>

          </div>
     );
};

export default Results;
