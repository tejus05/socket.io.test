import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'

const app = express();

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`a new user has connected : ${socket.id}`)
  socket.on("user-message", (message) => {
    io.emit('message', message)
  })
})

app.use(express.static(path.resolve("./public")));

app.get("/", (req,res) => {
  res.sendFile("/public/index.html");
});

server.listen(9000, () => {
  console.log("server started at 9000");
})