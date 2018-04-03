import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import TopNav from './Top_Nav';
import NavBar from './Nav_Bar';


class App2  extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className="container">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Github Analyzer</h1>
          <p className="bannerDesc">Github trends analysis visualized</p>
        </header>
        </div>
        <div className="Navbar">
        <NavBar />
        </div>
      </div>
    );
  }
}


export default App2;
