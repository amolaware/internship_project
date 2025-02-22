
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';

import PostAuction from './Components/PostAuction';
import AuctionItem from './Components/AuctionItem';
import AuthPage from './Components/AuthPage';
import './App.css';
import logo from '../src/assets/auction.png'

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          
          <nav>
            <img src={logo} height='250px' alt="" />
           
            {/* <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/postauction" className="nav-link">Post Auction</Link> */}

<h1 id='wel' >Welcome to BidBot</h1>
          </nav>
        </header>
        <main>
          <Routes>
            
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/postauction" element={<PostAuction />} />
            <Route path="/auctionitem" element={<AuctionItem />} />
            <Route path="/" element={<AuthPage />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Signup App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
