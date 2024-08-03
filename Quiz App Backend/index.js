import express from "express";
import cors from "cors";
import { createServer } from "http";
import apiRoutes from './routes/api.js'
const app = express();

const port = process.env.PORT || 3000;
import connectDb from "./db/connectDb.js";
connectDb();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT"],
    credentials: true,
  })
);
// const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT"],
//     credentials: true,
//   },
// });

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// io.on("connection", (socket) => {
//   console.log("Connection established");
//   console.log("ID", socket.id);
//   socket.emit("Welcome", `Welcome, to the server, ${socket.id}`);
//   socket.broadcast.emit("Joined", `${socket.id} joined the server`);

//   socket.on("disconnect", () => {
//     console.log(`\n ${socket.id} -> Connection closed \n`);
//   });
// });

app.use('/api', apiRoutes);

//Starting the server
app.listen(port, ()=>{
  console.log(`Server is listen at ${port}`);
});

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
