import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';



export default function HomePage() {
  const [user, setUser] = useState({});
  const [temp, setTemp] = useState({});
  const navigate = useNavigate();

  const handleClick = () => {
    setUser(temp);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setTemp(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    // fetch('http://localhost:8080/user', {
    //   method: 'POST',
    //   body: JSON.stringify(user)
    // })
    console.log(user);

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
            First Name: <input name = 'First' type="text" onChange = {handleChange} placeholder = "Enter First Name"/>
            Last Name: <input name = 'Last' type = 'text' onChange = {handleChange} placeholder = "Enter Last Name"/>
          </label>

          <label>
            Age: <input type="number" name ="Age" onChange = {handleChange} placeholder = "Enter Your Age"/>
          </label>

          <label>
            Gender:
            <select id="gender" name = "Gender" onChange = {handleChange} placeholder = "Select Your Gender">
              <option value = "Male">Male</option>
              <option value = "Female">Female</option>
            </select>
          </label>

          <label>
            Weight: <input type="number" name="Current_Weight" onChange = {handleChange} placeholder = "Enter Your Weight in lb" />
          </label>

          <label>
            Height: <input type="number" name="Height_INches" onChange = {handleChange} placeholder = "Enter Your Height in inches" />
          </label>

          <label>
            Goal:
            <select id="goal" name = "Goal" onChange = {handleChange} placeholder = "Select Your Goal">
              <option value = "Lose Weight">Lose Weight</option>
              <option value = "Build Muscle">Build Muscle</option>
              <option value = "Maintain">Maintain</option>
            </select>
          </label>

          <button onClick = {handleClick}>Submit!</button>
        </div>
      </section>
    </div>
    );
}
