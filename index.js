const http = require('http');
const port = 3000;

const customRequestHandler = (request, response) => {
  console.log('This is a new url');
  response.end('Hello! welcome to basic http server');
}

const server = http.createServer(customRequestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('New error');
  }

  console.log(`Listening on port ${port}`);
});

