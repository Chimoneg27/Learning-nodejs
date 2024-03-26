const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'}); //the header
    res.write('<h1>Welcome to my home page</h1>'); //the body
    res.end();
  }
  else if(req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'}); //the header
    res.write('<h1>This is my about page</h1>'); //the body
    res.end();
  }
  else if(req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'}); //the header
    res.write('<h1>This is my contact page</h1>'); //the body
    res.end()
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/html'}); //the header
    res.write('<h1>Page not found</h1>'); //the body
    res.end()
  }
});

server.listen(5000, () => {
  console.log('Server is running on port 5000')
})