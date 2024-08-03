import React, { useState, useEffect, useContext } from 'react';
import { QuizContext } from '@/Result_context/ResultContext';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Quiz = () => {
     const [questions, setQuestions] = useState([]);
     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
     const [responses, setResponses] = useState([]);
     const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
     const { setResults } = useContext(QuizContext);

     useEffect(() => {
          const fetchQuestions = async () => {
               try {
                    const response = await fetch(`http://localhost:4000/api/questions/`);
                    const data = await response.json();
                    console.log(data);
                    setQuestions(data);
               } catch (e) {
                    console.log("Couldn't fetch questions \n" + e);
               }
          };

          fetchQuestions();
     }, []);

     useEffect(() => {
          if (timeLeft === 0) {
               handleSubmit();
               return; // To prevent setting a timer when timeLeft is 0
          }

          const timer = setInterval(() => {
               setTimeLeft((prevTime) => prevTime - 1);
          }, 1000);

          return () => clearInterval(timer);
     }, [timeLeft]);

     const handleAnswerChange = (questionId, answer) => {
          const updatedResponses = responses.filter(
               (response) => response.questionId !== questionId
          );
          setResponses([...updatedResponses, { questionId, answer }]);
     };

     const handleSubmit = async () => {
          try {
               const response = await fetch('http://localhost:4000/api/submit', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ responses }),
               });
               const data = await response.json();
               console.log('Results', data);
               setResults(data); // Updating the context

          } catch (e) {
               console.error("Couldn't submit the answers, Try Again", e);
          }
     };

     if (questions.length === 0) {
          return (
               <div className='mt-20'>
                    Fetching the Questions
                    <div className=' items-center text-center flex justify-center'>
                         <div role="status">
                              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                              </svg>
                              <span className="sr-only">Loading...</span>
                         </div>
                    </div>
               </div>
          )
     }

     const currentQuestion = questions[currentQuestionIndex];

     return (
          <div className='px-11 py-5 text-left mt-0'>
               <div className='flex justify-end my-3'>
                    <h2 className='text-center text-2xl'>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</h2>
               </div>
               <div className='border flex py-4 px-5 rounded-xl bg-slate-50 shadow-md'>
                    <h2>Question {currentQuestionIndex + 1}/{questions.length}:  {currentQuestion.question}</h2>

               </div >

               <div className=' mt-10'>
                    {currentQuestion.options.map((option) => (
                         <div key={option}>
                              <div className='m-2 rounded-2xl border border-dotted p-4 hover:bg-slate-100'>
                                   <label>
                                        <input
                                             type="radio"
                                             name="answer"
                                             value={option}
                                             onChange={() => handleAnswerChange(currentQuestion._id, option)}
                                        />
                                        {'\t'}
                                        {'\t'}

                                        {option}
                                   </label>

                              </div>
                         </div>
                    ))}
               </div>
               <div className='absolute right-0 left-0 bottom-3 border w-full px-16 shadow-md'>
                    {currentQuestionIndex === questions.length - 1 ? (
                         <div className='flex justify-end'>
                              <Link to={'/dbms/results'}>
                                   <button className='m-3 p-2 w-24 rounded-3xl font-semibold border-cyan-700 bg-blue-200 border hover:bg-blue-500 hover:text-cyan-50'
                                        onClick={handleSubmit}>
                                        Submit
                                   </button>
                              </Link>
                         </div>) :
                         (
                              <div className='flex justify-between w-auto'>
                                   <button className='m-3 p-2 w-24 rounded-3xl font-semibold border-cyan-700 bg-blue-200 border hover:bg-blue-500 hover:text-cyan-50'
                                        onClick={() => setCurrentQuestionIndex((prevIndex) => prevIndex - 1)}
                                        disabled={currentQuestionIndex == 0}
                                   >
                                        Previous
                                   </button>
                                   <button className='m-3 p-2 w-24 rounded-3xl font-semibold border-cyan-700 bg-blue-200 border hover:bg-blue-500 hover:text-cyan-50'
                                        onClick={() => setCurrentQuestionIndex((prevIndex) => prevIndex + 1)}
                                        disabled={currentQuestionIndex === questions.length - 1}
                                   >
                                        Next
                                   </button>
                              </div>
                         )
                    }
               </div>


          </div>
     );
};

export default Quiz;
