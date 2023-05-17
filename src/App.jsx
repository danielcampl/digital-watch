import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Clock from './pages/Clock';
import Timer from './pages/Timer';
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