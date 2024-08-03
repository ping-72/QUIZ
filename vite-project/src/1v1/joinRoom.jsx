import React, { useState, useEffect } from 'react';
import socket from './socket_config';

const JoinRoom = ({ onGameStart }) => {
     const [roomId, setRoomId] = useState(null);
     const [waiting, setWaiting] = useState(true);

     useEffect(() => {
          socket.emit('joinRoom', (id) => {
               setRoomId(id);
               console.log('Joined room:', id);
          });

          socket.on('startQuiz', () => {
               setWaiting(false);
               onGameStart();
          });

          return () => {
               socket.off('startQuiz');
          };
     }, [onGameStart]);

     return (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
               {waiting ? (
                    <>
                         <h1>Waiting for another player to join...</h1>
                         <p>Room ID: {roomId}</p>
                    </>
               ) : (
                    <h1>Quiz is starting!</h1>
               )}
          </div>
     );
};

export default JoinRoom;
