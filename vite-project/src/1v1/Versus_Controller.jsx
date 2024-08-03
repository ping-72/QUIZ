import React, { useState } from 'react';
import JoinRoom from './joinRoom';
import Quiz from './quiz';
import Results from './Result';

const Versus = () => {
     const [stage, setStage] = useState('join');
     const [winner, setWinner] = useState(null);

     const handleGameStart = () => {
          setStage('quiz');
     };

     const handleGameEnd = (winner) => {
          setWinner(winner);
          setStage('results');
     };

     return (
          <div>
               {stage === 'join' && <JoinRoom onGameStart={handleGameStart} />}
               {stage === 'quiz' && <Quiz onGameEnd={handleGameEnd} />}
               {stage === 'results' && <Results winner={winner} />}
          </div>
     );
};

export default Versus;
