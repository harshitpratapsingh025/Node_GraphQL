import http from 'http';
import app from './app.mjs';

const port = process.env.port || 5000;

const server = http.createServer(app);

server.listen(port);
