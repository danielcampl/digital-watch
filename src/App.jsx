import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home';
import './styles/App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
      </Routes>
    </Router>
  );
}