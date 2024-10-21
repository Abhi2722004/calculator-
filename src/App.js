// src/App.js
import React from 'react';
import Calculator from './components/Calculator';
import './App.css'; // Optional: Import global styles

const App = () => {
  return (
    <div className="App">
      <h1>Mini Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
