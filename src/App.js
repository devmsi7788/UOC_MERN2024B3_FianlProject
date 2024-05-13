import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home'
import NumberGuess from './pages/Play/NumberGuess/NumberGuess'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/play/NumberGuess" element={<NumberGuess />} />
      </Routes>
    </Router>
  );
}

export default App;