const http = require('http');
const git = require('nodegit');

const hostname = '127.0.0.1';
const port = 3000;

// Récupération du repository git
git.Clone('https://github.com/SamuelBagattin/morpio', './clone')
  .then((repo) => {
    console.log(repo);
    // return repo;
  }).then((commit) => {
    return commit.getEntry("README.md");
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