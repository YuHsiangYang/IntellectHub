import express, { Request, Response } from 'express';
import net from 'net';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';






// Create a new express application instance
const app: express.Application = express();


app.use(express.json());

// Define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const server = net.createServer((socket) => {
  server.on('connection', (socket) => {
    console.log('connected');
  });
  server.on('data', (data) => {
    console.log(data);
  });
  server.on('end', () => {
    console.log('disconnected');
  });
  server.on('error', (err) => {
    console.log(err);
  });
});


if (process.env.NODE_ENV === 'dev') {
  app.get("/test", (req: Request, res: Response) => {
    res.send("upgrade");
  });
};


app.listen(8080, () => {
  console.log('Example app listening on port 3000!');
});