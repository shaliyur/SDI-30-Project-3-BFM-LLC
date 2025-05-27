const express = require('express');
const cors = require('cors')

const app = express();

const port = 8080;
const knex = require('knex')(require('../knexfile.js')["development"]);

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).send('Your knex and express application is running successfully!')
});

app.listen(port, () => {
  console.log('Your Knex and Express Application is running successfully!')
})
