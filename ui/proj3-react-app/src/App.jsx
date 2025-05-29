import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
// import NavBar from './components/NavBar';
// import LoginPage from './components/LoginPage';
// import HomePage from './components/HomePage';
import WorkoutsPage from './components/WorkoutsPage';
// import UserLogsPage from './components/UserLogsPage';


function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        {/* <Route path="/login" element={<LoginPage key = {"Log-In"}/>}/>
        <Route path="/home" element={<HomePage/>}/> */}
        <Route path="/workoutspage" element={<WorkoutsPage/>}/>
        {/* <Route path="/userlogspage" element={<UserLogsPage/>}/> */}
      </Routes>
    </div>
)
};

export default App;
