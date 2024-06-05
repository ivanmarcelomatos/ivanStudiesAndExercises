const http = require('http');

http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/html'});
 
  // Send the response body 'Hello World'
  res.end('Hello World!');
}).listen(8080);

console.log('Server running at http://localhost:8080/');
