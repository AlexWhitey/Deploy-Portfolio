'use strict';
// loading dotenv to manage variables
require('dotenv').config();

//load express to do the heavy liftnig of server
const express = require('express');
const app = express();

//Establish the PORT number
const PORT = process.env.PORT || 3000;

// Tell express where to load the "html" files from
app.use(express.static('./public'));

//Create routes (paths) that the user can acess the server from
app.get('/hello', (request, response) =>{
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }

  response.status(200).json(airplanes);
});

app.get('/', (request, response) => {
  response.status(200).redirect('index.html');
});

// Add a catch-all to get routes that don't exist
app.use('*', (request, response) => response.send(`Sorry, that route does not exist`));

// Turn server on

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
