import { useState, useEffect } from 'react'


export default function WorkoutsPage() {
  // const { id } = useParams()
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/workouts`)
    .then(res => res.json())
    .then(data => {
      setWorkouts(data)
      console.log(data)
    })
    .catch(error => console.error('error fetching workouts:', error))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>WORKOUT LIST</h1>
      {workouts.length > 0 ? (
        <ul>
          {workouts.map(w => (
            <li key={w.workout_id}>
              <strong>{w.name}</strong> - {w.type} ({w.rec_sets} sets of {w.rec_reps})
              {w.image_url && (
                <div>
                  <img src={w.image_url} alt={w.name} style={{ width: '300px', marginTop: '0.5rem', borderRadius: '8px' }}/>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading Workouts...</p>
      )}
    </div>
  )
}




