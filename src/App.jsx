import React from 'react';
import './all.css';
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Dashboard from './dashboard';
import SportsDash from './sports'
import Footer from './footer';
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-center text-2xl font-bold mt-5">Welcome to Fortune Bet</h1> */}
      {/* <Sidebar /> */}
      <Dashboard />
      <SportsDash />
      <Footer/>
    </div>
  );
};

export default App;
