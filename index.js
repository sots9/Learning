const express = require('express');
const con = express();
const port = 3000;

con.get('/', (request, response) => {
  console.log('This is a new url');
  response.send('Hello! welcome to basic http server with express');
});

con.listen(port, (err) => {
  if (err) {
    return console.log('New error');
  }

  console.log(`Listening on port ${port} through express`);
});

