const http = require('http');
const gitCloner = require('git-cloner');

const hostname = '127.0.0.1';
const port = 3000;

// Récupération du repository git
gitCloner([
  'morpio', {
    source: 'https://github.com/SamuelBagattin/morpio',
    path: './clones',
  },
], `${__dirname}/clones`, (err, data) => {
  console.log(err || data);
});

// server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});