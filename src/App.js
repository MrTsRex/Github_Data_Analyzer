import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import TopNav from './components/Top_Nav';
import NavBar from './components/Nav_Bar';
import Repository from './components/Repository/Repository'
import Home from './components/Home/Home'
import Users from './components/Users/Users'
import SavedGraphs from './components/SavedGraphs/SavedGraphs'
import Languages from './components/Languages/Languages'


class App  extends React.Component {
  state = {
    selectedTab: 'Home'

  };
  componentWillMount() {
    console.log ("Page rendered");
  };
  changeTab(selectedTab){
    this.setState({
      selectedTab: selectedTab
    });
    console.log("callback made for: ", selectedTab);
  };
  render() {
    return (
      <div className="App">
        <div className="header">
          <TopNav />
          <div className="container">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Github Analyzer</h1>
              <p className="bannerDesc">Github trends analysis visualized</p>
            </header>
          </div>
          <div className="Navbar">
            <NavBar callBackFunction={this.changeTab.bind(this)}/>
            
          </div>
        </div>
          {
            this.state.selectedTab === 'Home'
            ? (
              
               
               <div >
               <Home />
               </div>
              
            ) 
            : this.state.selectedTab === 'Repositories' 
            ? 
            (
                <div>
                <Repository />
                </div>
            ) 
            : this.state.selectedTab === 'Languages' 
            ? 
            (
                <div>
                <Languages />
                </div>
            )
            : this.state.selectedTab === 'Users' 
            ? 
            (
                <div>
                <Users />
                </div>
            )
            : this.state.selectedTab === 'Saved Graphs' 
            ? 
            (
                <div>
                <SavedGraphs />
                </div>
            ) : null

          }
      </div>
    );
  }
}


export default App;
