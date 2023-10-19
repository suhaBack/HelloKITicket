import React from 'react';
import './App.css';
import Header from './routes/Header';
import { Routes } from 'react-router-dom';
import Footer from './routes/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
