const http = require('http');
const fs = require('fs');

// get the contents of HTML, CSS, JS and Logo files
const homePage = fs.readFileSync('./index.html');
const homeStyles = fs.readFileSync('./style.css');
const homeLogic = fs.readFileSync('./browserApp.js');
const logo = fs.readFileSync('./logo.svg');

// the server 

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if(url === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
    res.end();
  }else if(url === '/browserApp.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
  }else if(url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(logo);
    res.end();
  }
  else if(url === '/about'){
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>404 Page Not Found</h1>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})