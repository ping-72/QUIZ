import React, { useState, useEffect } from 'react';
import socket from './socket_config';

const Quiz = ({ onGameEnd }) => {
     const [question, setQuestion] = useState([]);
     const [selectedAnswer, setSelectedAnswer] = useState(null);
     const [scores, setScores] = useState({});
     const [isGameOver, setIsGameOver] = useState(false);
     const [winner, setWinner] = useState(null);
     const [loading, setLoading] = useState(false);

     useEffect(() => {

          fetchQuestion();

          socket.on('updateScores', (newScores) => {
               setScores(newScores);
          });

          socket.on('gameOver', ({ winner }) => {
               setIsGameOver(true);
               setWinner(winner);
               onGameEnd(winner);
          });

          socket.on('userDisconnected', () => {
               alert('The other user has disconnected. The game will end.');
               setIsGameOver(true);
               setWinner(null);
               onGameEnd(null);
          });

          return () => {
               socket.off('updateScores');
               socket.off('gameOver');
               socket.off('userDisconnected');
          };
     }, [onGameEnd]);

     // fetching question function
     const fetchQuestion = async () => {
          setLoading(true);
          try {
               const response = await fetch(`http://localhost:5000/api/questions/`);
               const data = await response.json();
               console.log(data)
               setQuestion(data);
               setLoading(false);
               console.log(question)
          } catch (err) {
               console.log('Error while fetching question: ', err);
               setLoading(false);
          }
     }

     // Submiting and checking the answer
     // fetch function again need to be checked
     const handleSubmitAnswer = async () => {
          try {
               const response = await fetch('http://localhost:5000/api/submit/', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         questionId: question._id,
                         answer: selectedAnswer,
                    })
               })

               if (response.data.isCorrect) {
                    socket.emit('updateScore', { roomId: socket.id, playerId: socket.id });
               }
               fetchQuestion();
               setSelectedAnswer(null);
          } catch (error) {
               console.error('Error checking answer:', error);
          }
     };

     if (isGameOver) {
          return (
               <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h1>Game Over</h1>
                    <p>{winner ? `Winner: ${winner}` : 'Game ended due to disconnection.'}</p>
               </div>
          );
     }

     if (loading) {
          return (
               <div>Loading the Questions...</div>
          )
     }

     if (!question) {
          return <div>No question available question...</div>;
     }

     return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
               <h2>Question </h2>
               <p>{question.text}</p>
               {question.options.map((option) => (
                    <div key={option}>
                         <label>
                              <input
                                   type="radio"
                                   name="answer"
                                   value={option}
                                   // checked={selectedAnswer === option}
                                   onChange={() => setSelectedAnswer(option)}
                              />
                              {option}
                         </label>
                    </div>
               ))}
               <button onClick={handleSubmitAnswer} disabled={selectedAnswer === null}>
                    Submit Answer
               </button>
               <div>
                    <h3>Scores</h3>
                    {Object.entries(scores).map(([playerId, score]) => (
                         <p key={playerId}>
                              {playerId}: {score}
                         </p>
                    ))}
               </div>
          </div>
     );
};

export default Quiz;
