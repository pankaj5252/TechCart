// App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Componants/Common/Header';
import Footer from './Componants/Common/Footer';
import Home from './Componants/Home';
import About from './Componants/About';
import NotFound from './Componants/NotFound';
import TopBar from './Componants/Common/TopBar';

const App = () => {
  return (
    <Router>
      <TopBar/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
