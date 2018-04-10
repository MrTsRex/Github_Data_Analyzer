import React from 'react';
import cx from 'classnames';
import './NavBar.css';

class navbar extends React.Component {
  render() {
    return (
      <div className="navbar" role="navigation">
        <button className="link" onClick={() => this.props.callBackFunction('Home')}>
         HOME 
        </button>
        <span className="spacer">   |   </span>
        <button className="link" onClick={() => this.props.callBackFunction('Repository')}>
          REPOSITORY
        </button>
        <span className="spacer"> | </span>
        <button className="link" onClick={() => this.props.callBackFunction('Languages')}>
          LANGUAGES
        </button>
        <span className="spacer"> | </span>
        <button className="link" onClick={() => this.props.callBackFunction('Users')}>
          USERS
        </button>
        <span className="spacer"> | </span>
        <button className="link"  onClick={() => this.props.callBackFunction('SavedGraphs')}>
          SAVED GRAPHS
        </button>
      </div>
    );
  }
}

export default navbar;

