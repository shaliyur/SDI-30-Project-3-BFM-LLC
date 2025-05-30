import React from 'react';
import './WorkoutCard.css';

export default function WorkoutCard ({ workout }) {
  return (
    <div className='workout-card'>
      <h3 style={{ color: 'black'}}>{workout.name}</h3>
      <p className='workout-description'>
        <strong>Type:</strong> {workout.type}<br />
        <strong>Recommended:</strong> {workout.rec_sets} sets of {workout.rec_reps}
      </p>
      {workout.image_url && (
        <img src={workout.image_url} alt={workout.name} className='workout-image'/>
      )}
      <br />
      {workout.video_url && (
        <a
         href={workout.video_url}
         target='_blank'
         rel="noopener noreferrer"
         className="workout-video">
         Watch Video Demo
       </a>
      )}
    </div>
  )
}

// style={{ width: '300px', marginTop: '0.5rem', borderRadius: '8px' }}