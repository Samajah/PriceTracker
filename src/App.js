import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Trends from './components/pages/Trends';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home />} />
          <Route path='/trends' component={<Trends />} />
          <Route path='/login' component={<Login />} />
          <Route path='/sign-up' component={<Signup />} />
        </Routes>
      </Router>
      <Signup />
    </>
  );
}

export default App; 