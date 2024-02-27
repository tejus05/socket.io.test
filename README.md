# Express and Socket.io Chat App

This is a simple chat application built using Node.js, Express, and Socket.io. It allows users to connect to a server, send messages, and receive messages in real-time.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tejus05/socket.io.test.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the server:

   ```bash
   npm start
   ```

   This will start the server on port 9000.

2. Open your browser and go to [http://localhost:9000](http://localhost:9000) to access the chat application.

3. Enter a username and start chatting!

## Server Details

The server is built using Express and utilizes Socket.io for real-time communication. It serves static files from the `public` directory and handles the main route that loads the `index.html` file.

The server listens for socket connections and logs a message when a new user connects. It also listens for "user-message" events and broadcasts the received messages to all connected clients.

```javascript
import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`A new user has connected: ${socket.id}`);
  socket.on("user-message", (message) => {
    io.emit('message', message);
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});

server.listen(9000, () => {
  console.log("Server started at http://localhost:9000");
});
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.
