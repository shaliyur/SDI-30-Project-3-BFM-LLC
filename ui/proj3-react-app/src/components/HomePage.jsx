import React, { useState, useEffect, createContext, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';



export default function HomePage() {
  const [user, setUser] = useState({});
  const [temp, setTemp] = useState({});
  const [selectedGender, setSelectedGender]= useState(null);
  const [selectedGoal, setSelectedGoal]= useState(null);

  const navigate = useNavigate();

  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const ageRef = useRef(null);
  const genderRef = useRef(null);
  const heightRef = useRef(null);
  const weightRef = useRef(null);
  const goalRef = useRef(null);

  const refs = [firstRef, lastRef, ageRef, genderRef, heightRef, weightRef, goalRef]


  const handleClick = () => {
    setUser(temp);

    refs.forEach(ref => {
      if (ref.current) {
        ref.current.value = '';
      }
    });

    setSelectedGender(null);
    setSelectedGoal(null);
  }

  function clearAllInputs() {
    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(input => input.value = '');
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setTemp(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    if (Object.keys(user).length !== 0){
      fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
      console.log(user);
    }
  }, [user])



  return (
    <div className = 'homepage'>
      <header>
        <h1> Home Page </h1>
      </header>

      <section className="about">
        <h2>About BFM LLC</h2>
        <p> The App to have if you want to meet your fitness needs </p>
      </section>

      <section className="user-info">
        <h2>User Info:</h2>
        <div>
          <label>
            First Name: <input name = 'First' type = "text" onChange = {handleChange} ref = {firstRef} placeholder = "Enter First Name"/>
            Last Name: <input name = 'Last' type = 'text' onChange = {handleChange} ref = {lastRef} placeholder = "Enter Last Name"/>
          </label>
          <label>
            Age: <input type="number" name = "Age" onChange = {handleChange} ref = {ageRef} placeholder = "Enter Your Age"/>
          </label>
          <label>Gender:</label>
            <label>
              Male: <input type="radio" name = "Gender" value = 'Male' ref = {genderRef} onChange = {handleChange} checked = {selectedGender === 'Male'}/>
            </label>
            <label>
              Female: <input type="radio" name = "Gender" value = 'Female' ref = {genderRef} onChange = {handleChange} checked = {selectedGender === 'Female'}/>
            </label>
          <label>
            Weight: <input type="number" name = "Current_Weight" onChange = {handleChange} ref = {weightRef} placeholder = "Enter Your Weight in lb" />
          </label>
          <label>
            Height: <input type="number" name = "Height_Inches" onChange = {handleChange} ref = {heightRef} placeholder = "Enter Your Height in inches" />
          </label>
          <label>Goal:</label>
          <label>
            Lose Weight: <input type = "radio" name = "Goal" value = 'Lose Weight' ref = {goalRef} onChange = {handleChange} checked = {selectedGoal === 'Lose Weight' }/>
          </label>
          <label>
            Build Muscle: <input type = "radio" name = "Goal" value = 'Build Muscle' ref = {goalRef} onChange = {handleChange} checked = {selectedGoal === 'Build Muscle' }/>
          </label>
          <label>
            Maintain: <input type = "radio" name ="Goal" value = 'Maintain' ref = {goalRef} onChange = {handleChange} checked = {selectedGoal === 'Maintain' }/>
          </label>
          <button onClick = {handleClick}>Submit!</button>
        </div>
      </section>
    </div>
    );
  }

