const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//In this code, there is no error handling for the server.listen() method. If there's a problem starting the server (e.g., port in use, permissions issue), the error won't be caught and logged, leading to silent failure.