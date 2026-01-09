const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('hello world');
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server keyrir á http://${HOSTNAME}:${PORT}`);
});