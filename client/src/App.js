import React from 'react';
import './App.css';
import Header from './routes/Header';
import {BrowserRouter, Routes, Route, NavLink, Link, useParams} from 'react-router-dom';
import Footer from './routes/Footer';
import Login from './routes/Login';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
