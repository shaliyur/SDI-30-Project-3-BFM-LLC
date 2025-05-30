import { useState, useEffect } from 'react'
import React from 'react'
import WorkoutCard from './WorkoutCard'
import './WorkoutsPage.css'
import './WorkoutCard.css'

export default function WorkoutsPage() {
  // const { id } = useParams()
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/workouts`)
    .then(res => res.json())
    .then(data => {
      setWorkouts(data)
      // console.log(data)
    })
    .catch(error => console.error('error fetching workouts:', error))
  }, [])

  return (
    <div className="workouts-container">
      <h1 className="workout-list-h1">WORKOUT LIST</h1>
      {workouts.length > 0 ? (
        <div className="workout-list">
          {workouts.map(w => (
            <WorkoutCard key={w.workout_id} workout={w} />
          ))}
        </div>
      ) : (
        <p>Loading Workouts...</p>
      )}
    </div>
  )
}
//////////////WORKOUTCARD////////////////////////////



  //   <div className="workouts-container">
  //   <h1>WORKOUT LIST</h1>
  //   {workouts.length > 0 ? (
  //     <ul className="workout-list">
  //       {workouts.map(w => (
  //         <li key={w.workout_id} className="workout-item">
  //           <strong>{w.name}</strong> - {w.type} ({w.rec_sets} sets of {w.rec_reps})
  //           {w.image_url && (
  //             <div>
  //               <img src={w.image_url} alt={w.name} style={{ width: '300px', marginTop: '0.5rem', borderRadius: '8px' }}/>
  //               <br />
  //               <a href={w.video_url} target="_blank" rel="noopener noreferrer">Watch Demo</a>
  //             </div>
  //           )}
  //         </li>
  //       ))}
  //     </ul>
  //   ) : (
  //     <p>Loading Workouts...</p>
  //   )}
  // </div>