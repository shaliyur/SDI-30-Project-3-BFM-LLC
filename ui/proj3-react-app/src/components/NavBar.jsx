import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import './NavBar.css';



export default function NavBar() {
  return (
    <nav className = "navbar">
      <h1 className="logo">BFM LLC</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/workouts">Workouts</Link></li>
          <li><Link to="/logs">User Logs</Link></li>
        </ul>
    </nav>
  );
}