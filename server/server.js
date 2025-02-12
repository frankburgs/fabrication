/*
  myFunction() returns an array containing quantities of each item #.

// Named import
import { moduleScopedVariable } from './exampleModule.js';

// Default import
import exampleFunction from './exampleModule.js';

*/
import http from 'node:http';
import { myFunction } from './qty.js';

const hostname = '127.0.0.1';
const port = 3000;

const fileCount = myFunction();

console.log("Again file count is " + fileCount);

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*'); // Or else CORS error.
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('75');// Send the response body.
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});