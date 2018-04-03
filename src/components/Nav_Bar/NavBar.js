import React from 'react';
import cx from 'classnames';
import './NavBar.css';

class navbar extends React.Component {
  render() {
    return (
      <div className="navbar" role="navigation">
        <div className="link" >
          Repositories
        </div>
        <span className="spacer"> | </span>
       <div className="link" >
          Languages
        </div>
        <span className="spacer"> | </span>
        <div className="link">
          Users
        </div>
        <span className="spacer"> | </span>
        <div className="link" >
          Saved Graphs
        </div>
      </div>
    );
  }
}

export default navbar;