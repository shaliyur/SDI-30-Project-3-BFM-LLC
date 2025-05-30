import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

import NavBar from './NavBar';

export default function UserLogsPage(){
  const [log, setLog] = useState({});
  const [exercises, setExercises] = useState([{
    name: 'bench press',
    weight: 180,
    sets: 3,
    reps: 8
  }]);


  const addExerciseOnClick = (event) => {
    event.preventDefault();
    let exercise_name = document.getElementById('Name').value;
    let exercise_weight = parseInt(document.getElementById('Weight').value);
    let exercise_sets = parseInt(document.getElementById('Sets').value);
    let exercise_reps = parseInt(document.getElementById('Reps').value);

    let new_exercise = {
      name: exercise_name,
      weight: exercise_weight,
      sets: exercise_sets,
      reps: exercise_reps
    }

    setExercises([...exercises, new_exercise]);

    //use document to get data and format it like this:
    //   {
    //   name: 'bench press',
    //   weight: 180,
    //   sets: 3,
    //   reps: 8
    // }
    //push to exercises (setExercises([...exercises, new_exercise]))
    //console.log('Add Exercise: ', event);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let User_id = parseInt(document.getElementById('user_id').value);
    let Date_recorded = document.getElementById('date').value;
    let Workout_type = document.getElementById('type').value;

    const exercises_obj = exercises.reduce((acc, curr, index) => {
      let exercise_count = index+1;
      acc['Exercise'+exercise_count] = curr;
      return acc;
    }, {});

    let new_log = {
      User_id: User_id,
      Date_recorded: Date_recorded,
      Workout_type: Workout_type,
      Exercises: exercises_obj
    }

    fetch('http://localhost:8080/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(new_log)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  //create click event for submit
   //collect all data (i.e. user id, date, workout type, exercises)
   //format data in the api-compatible version
   //send to api endpoint via post request using fetch
   //display confirmation of submission to user (via alert)

  return (
    <div className="user-log-page">
      <NavBar/>
      <h1> Record a Workout </h1>
      <form className = 'log-form'>
          <label>
            User ID: <input id = 'user_id' name = 'user_id' type = 'text' placeholder = 'Enter your user ID'/>
          </label>
          <label>
              Date Recorded: <input id = 'date' name = 'Date_Recorded' type = 'date' placeholder = "Fill Me In"/>
            </label>
            <label>
              Workout Type: <input id = 'type' name = 'Workout_type' type = 'text' placeholder = "Fill Me In"/>
            </label>


        <h2>Exercises</h2>
        {
          exercises.map(exercise => {
            return (
              <div>
                <p>Name: {exercise.name} Weight: {exercise.weight} Sets: {exercise.sets} Reps: {exercise.reps}</p>
              </div>
            )
          })
        }

        <h3>Enter New Exercise</h3>
          <input id = 'Name' name = 'name' type = 'text' placeholder = "Name"/>
          <input id = 'Weight' name = 'weight' type = 'number' placeholder = "Weight"/>
          <input id = 'Sets' type = 'number' placeholder = "Sets"/>
          <input id = 'Reps' type = 'number' placeholder = "Reps"/>

          <button onClick = {addExerciseOnClick}>Add An Exercise!</button>
            {/* <button onClick = {handleClick}>Submit!</button> */}

        <button onClick ={handleSubmit}>Submit Workout!</button>
      </form>
    </div>
  )

};




// export default function UserLogsPage(){
//   const [log, setLog] = useState({});
//   const [temp, setTemp] = useState({});



//   useEffect(() => {
//     if (Object.keys(log).length !== 0){
//       fetch('http://localhost:8080/logs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(log)
//       })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(err => console.log(err))
//       console.log(log);
//     }
//   }, [log])

//     const handleChange = (event) => {
//     const {name, value} = event.target;
//     setTemp(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   //create function to add Exercise on Exercise button click
//   //  function takes input fields as new exercise to exercises state
//   //  have exercises state
//   //in html
//   //  loop through exercises state
//   //    display each exercise as exercise component
//   //


//   const handleAddExercise = (event) => {
//     const {name, value} = event.target;
//     setTemp(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   const addExercise = (event) => {}

//   return (
//   <div className="user-log-page">
//     <h2> Record a Workout </h2>
//     <form onSubmit={handleSubmit} className = 'log-form'>
//          <label>
//             Date Recorded: <input name = 'Date_Recorded' type = 'date' onChange = {handleChange} ref = {lastRef} placeholder = "Fill Me In"/>
//           </label>
//           <label>
//             Workout Type: <input name = 'Workout_type' type = 'text' onChange = {handleChange} ref = {lastRef} placeholder = "Fill Me In"/>
//           </label>

//       <h3>Exercises</h3>
//         Exercise 1:
//         <input name = 'name' type = 'text' placeholder = "Name"/>
//         <input name = 'weight' type = 'text' placeholder = "Weight"/>
//         <input name = 'sets' type = 'text' placeholder = "Sets"/>
//         <input name = 'reps' type = 'text' placeholder = "Reps"/>

//          {/* <button onClick = {addExcercise}>Add An Exercise!</button> */}
//           <button onClick = {handleClick}>Submit!</button>
//     </form>
//   </div>
// )

// };


