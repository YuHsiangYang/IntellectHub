import { Server } from "socket.io";

const io = new Server(8080);

io.on("connection", (socket) => {
  socket.emit("hello", "world");
  socket.on("message", (data) => {
    console.log(data);
  });
});