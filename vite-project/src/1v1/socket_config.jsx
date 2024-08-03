import { io } from 'socket.io-client';
import React from 'react';

// Connecting the socket to the backemd URL 
const socket = io('http://localhost:5000');


export default socket;
