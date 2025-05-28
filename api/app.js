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
    const {First, Last, Age, Gender, Current_Weight, Height_Inches, Goal} = req.body;
    const user_id = await getMaxUserID();

    const new_user = {
      user_id: ++user_id.max,
      First: First,
      Last: Last,
      Age: Age,
      Gender: Gender,
      Current_Weight: Current_Weight,
      Height_Inches: Height_Inches,
      Goal: Goal
    }

    knex('users')
    .insert(new_user)
    .then(x => res.status(200).json(new_user))
    .catch(err => res.status(500).send(err))

  })

  app.delete('/users/:id', (request, response) => {
    const {id} = request.params;

    knex('users')
      .where({ user_id: id })
      .del()
      .then((deletedUser) => {
        if (deletedUser) {
          response.status(200).json(`${id} has been deleted`)
        } else {
          response.status(400).json(`${id} does not exist`)
        }
      })
      .catch((err) => {
        response.status(500).json({error: err.message})
      });
  });


///////////////////////////////////////Endpoints for workout log table/////////////////////////////////////////////////////////////
async function getMaxLogID(){
  return knex('workout_logs').max('Log_id').first()
}

app.get('/logs',(request, response) => {
  knex('workout_logs')
  .select('*')
  .then(data => {
    var logData = data.map(data => data)
    response.json(logData)
  })
  .catch(err => {
    response.status(500).send(err)
    console.log(err)
  })
});

app.post('/logs', async (req, res) => {
  const {User_id, Date_recorded, Workout_type, Exercises} = req.body;
  const log_id = await getMaxLogID();

  const new_log = {
    Log_id: ++log_id.max,
    User_id: User_id,
    Date_recorded: Date_recorded,
    Workout_type: Workout_type,
    Exercises: Exercises
  }

  knex('workout_logs')
  .insert(new_log)
  .then(x => res.status(200).json(new_log))
  .catch(err => res.status(500).send(err))

});

  //{Log_id: 1, User_id: '1', Date_recorded: '26 May 2025', Workout_type: 'Legs',  Exercises: '{Exercise1: {name: Squat, weight: 225kg, sets: 3, reps: 12}, Exercise2: {name: Leg Press, weight: 400kg, sets: 4, reps: 15} Exercise3: {name: Hamstring Curl, weight: 120kg, sets: 3, reps: 10}}'}

  app.delete('/logs/:id', (request, response) => {
    const {id} = request.params;

    knex('workout_logs')
      .where({ Log_id: id })
      .del()
      .then((deletedLog) => {
        if (deletedLog) {
          response.status(200).json(`${id} has been deleted`)
        } else {
          response.status(400).json(`${id} does not exist`)
        }
      })
      .catch((err) => {
        response.status(500).json({error: err.message})
      });
  });


app.listen(port, () => {
  console.log('Your Knex and Express Application is running successfully!')
})