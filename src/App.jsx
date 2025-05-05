// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Acceder from './paginas/Acceder';
import './App.css';

function App() {

  return (
    <div className="app">

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/acceder" element={<Acceder/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
