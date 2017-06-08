const express = require('express');
const con = express();
const port = 3000;



con.use((request, response, next) => {
  console.log(request.headers);
  next();
});

con.use((request, response, next) => {
  request.chance = Math.random();
  next();
});

con.get('/', (request, response) => {
  response.json({chance: request.chance});
});

con.listen(port, (err) => {
  if (err) {
    response.status(500).send('Something broke!!');
    return console.log('New error');
  }

  console.log(`Listening on port ${port} through express`);
});

