const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send a response
  res.end('Hello, World!\n');
});

// Start the server
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
