import { React, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import PostById from './components/PostById';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>

        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostById />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
