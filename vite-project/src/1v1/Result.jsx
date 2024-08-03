import React from 'react';

const Results = ({ winner }) => {
     return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
               <h1>Quiz Results</h1>
               <p>{winner ? `Winner: ${winner}` : 'Game ended without a winner.'}</p>
          </div>
     );
};

export default Results;
