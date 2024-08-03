import React, { createContext, useState } from 'react';

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
     const [results, setResults] = useState(null);

     return (
          <QuizContext.Provider value={{ results, setResults }}>
               {children}
          </QuizContext.Provider>
     );
};

export { QuizContext, QuizProvider };
