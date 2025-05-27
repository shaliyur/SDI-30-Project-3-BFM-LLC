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
  const {type} = request.query;

  if (type !== undefined) {
    knex.select()
    .from('workouts')
    .where({type: type})
    .then(data => response.status(200).json(data))
    .catch(err => {
    res.status(404).json({
      message: 'The exercise type is not available'
    })
  });

  }
  else {
    knex('workouts')
    .select('*')
    .then(workouts => {
      var workoutData = workouts.map(workouts => workouts)
      response.json(workoutData)
    });
  }

})

app.get('/workouts/:name', (request, response) => {
  const {name} = request.params;
  console.log(name);

  knex.select()
  .from('workouts')
  .where({name: name})
  .then(data => response.status(200).json(data))
  .catch(err => {
    res.status(404).json({
      message: 'The exercise is not available'
    })
  });

  });

  ///////////////////////////////////////Endpoints for users table/////////////////////////////////////////////////////////////

  async function getMaxUserID(){
    return knex('users').max('user_id').first()
  }

  app.get('/users', (request, response) => {
    knex('users')
    .select('*')
    .then(users => {
      var userData = users.map(users => users)
      response.json(userData)
  });

  });

  app.post('/users', async (req, res) => {
    const {First, Last, Age, Gender, Current_Weight, Goal} = req.body;
    const user_id = await getMaxUserID();

    const new_user = {
      user_id: ++user_id.max,
      First: First,
      Last: Last,
      Age: Age,
      Gender: Gender,
      Current_Weight: Current_Weight,
      Goal: Goal
    }

    knex('users')
    .insert(new_user)
    .then(x => res.status(200).json(new_user))
    .catch(err => res.status(500).send(err))

  })




