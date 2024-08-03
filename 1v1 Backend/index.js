import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import bodyParser from 'body-parser';
import cors from "cors";
import connectDb from './ConnectDb/connectDb.js';
import router from './routes/api.js';


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins
    methods: ["GET", "POST"], // Allow specific methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
    credentials: true // Enable cookies to be sent with the requests
  }
});
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT"], // Allow specific methods
    credentials: true, // Enable cookies to be sent with the requests
  })
);

// Connect to MongoDB
connectDb();

// Routes
app.use('/api', router);

// Socket.io logic
const rooms = {}; // Store rooms and their states

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('joinRoom', async (callback) => {
    let roomId;
    for (const [id, room] of Object.entries(rooms)) {
      if (room.players.length === 1) {
        roomId = id;
        room.players.push(socket.id);
        break;
      }
    }
    if (!roomId) {
      roomId = socket.id; // use socket.id as the room ID
      rooms[roomId] = { players: [socket.id], scores: { [socket.id]: 0 },  };
    } else {
      rooms[roomId].scores[socket.id] = 0;
    }

    socket.join(roomId);
    if (rooms[roomId].players.length === 2) {
      // Room is full, start the quiz
      io.in(roomId).emit('startQuiz');
    }

    callback(roomId);
  });

  socket.on('updateScore', ({ roomId, playerId}) =>{
    if(rooms[roomId]){
      rooms[roomId].scores[playerId] += 1;
      const scores = rooms[roomId].scores;
      if(scores[playerId] >= 5){
        io.in(roomId.emit('GameOver', {winner : playerId}));
        delete rooms[roomId]; // Clear the room Data
      }else{
        io.in(roomId).emit('updateScores', scores);
      }
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
    for (const [roomId, room] of Object.entries(rooms)) {
      if (room.players.includes(socket.id)) {
        delete rooms[roomId];
        io.in(roomId).emit('userDisconnected');
        break;
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
