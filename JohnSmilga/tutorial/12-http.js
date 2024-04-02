const http = require('http');

// req = incoming request;
// res = outgoing response; what we are sending back to the client;
const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end('Welcome to our home page');
    return;
  }
  if(req.url === '/about') {
    res.end('Here is our short history');
    return;
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `)
});

server.listen(5000); // port number