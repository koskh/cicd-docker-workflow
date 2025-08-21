const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from workflow!!! with 80 port\n');
});

server.listen(port, () => {
  console.log(`Server started...`);
});