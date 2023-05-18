import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './globals/App.css';
import Home from './pages/Home';
import Timer from './pages/timer/Timer';
import Clock from './pages/clock/Clock';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/clock" exact Component={Clock} />
        <Route path="/timer" exact Component={Timer} />
      </Routes>
    </Router>
  );
}
