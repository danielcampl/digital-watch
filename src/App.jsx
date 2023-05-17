import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Clock from './pages/clock/Clock';
import Timer from './pages/timer/Timer';
import './styles/App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Clock />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}