const express = require('express');
const cors = require('cors')

const app = express();

const port = 8080;
const knex = require('knex')(require('./knexfile.js')["development"]);

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.status(200).send('Your knex and express application is running successfully!')
});

app.listen(port, () => {
  console.log('Your Knex and Express Application is running successfully!')
})

app.get('/workouts', (request, response) => {
  knex('workouts')
    .select('*')
    .then(workouts => {
      var workoutData = workouts.map(workouts => workouts)
      response.json(workoutData)
    })
})

app.get('/workouts/:name', (request, response) => {
  const {name} = request.params;
  console.log(name);

  knex.select()
  .from('workouts')
  .where({name: name})
  .then(data => response.status(200).json(data))
  .then(data => console.log(data))
  .catch(err => {
    res.status(404).json({
      message: 'The exercise is not available'
    })
  });

  });

