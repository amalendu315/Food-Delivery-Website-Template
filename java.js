const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8000;

const fileContent = fs.readFileSync('index.html');

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.statusCode = 200;
  res.setHeader('Content-type','text/html');
  res.end(fileContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});