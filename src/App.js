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
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import LogIn from './components/LogIn/LogIn'
import SignUp from './components/SignUp/SignUp'

import axios from 'axios'

class App  extends React.Component {
  state = {
    selectedTab: 'Home', 
    responseData: []

  };
  componentWillMount() {
    console.log ("Page rendered");
  };
  changeTab(selectedTab){
    this.setState({
      selectedTab: selectedTab
    });
    /*if(selectedTab === 'Languages'){
      console.log('Flow');
      axios.get('http://localhost:3000/languages/top/100')
      .then((response) => {
        console.log(response);
        this.setState({ responseData: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    }*/
    // if(selectedTab === 'Repository'){
    //   console.log('Flow');
    //   axios.get('http://localhost:3000/repository/topxwatch/100')
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ responseData: response.data })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }
    // if(selectedTab === 'Users'){
    //   console.log('Flow');
    //   axios.get('http://localhost:3000/users/knows/%25alex%25')
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ responseData: response.data })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }
    console.log("callback made for: ", selectedTab);
  };


  render() {  

    var content = (<Home />);

    if(this.state.selectedTab === 'Home'){
      content = (<Home data = {this.state.responseData} />);
    }
    else if(this.state.selectedTab === 'Repository'){
      content = (<Repository data = {this.state.responseData} />);              
    }
    else if(this.state.selectedTab === 'Languages'){
      content = (<Languages data = {this.state.responseData} />);  

    }
    else if(this.state.selectedTab === 'Users'){
      content = (<Users data = {this.state.responseData} />);              
    }
    else if(this.state.selectedTab === 'SavedGraphs'){
      content = (<SavedGraphs />);              
    }
    else if(this.state.selectedTab === 'About'){
      content = (<About />);              
    }
    else if(this.state.selectedTab === 'Contact'){
      content = (<Contact />);              
    }
    else if(this.state.selectedTab === 'SignUp'){
      content = (<SignUp />);              
    }
    else if(this.state.selectedTab === 'LogIn'){
      content = (<LogIn />);              
    }
    else if(this.state.selectedTab === 'SavedGraphs'){
      content = (<SavedGraphs data = {this.state.responseData}/>);              
    }  

    return (
      <div className="App">
        <div className="header">
          
            <TopNav callBackFunction={this.changeTab.bind(this)}/>           
            
          <div className="container">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Github Analyzer</h1>
              <p className="bannerDesc">Github trends analysis visualized!</p>
            </header>
          </div>
          <div className="Navbar">
            <NavBar callBackFunction={this.changeTab.bind(this)}/>           
          </div>
         
        </div>
        {content}
      </div>
    );
  }
}


export default App;
