import { io } from "socket.io-client";

const socket = io("ws://localhost:8080");

socket.on("hello", (data) => {
    console.log(data);
});

socket.emit("message", "hi server");