import React from 'react';
import cx from 'classnames';
import './NavBar.css';

class navbar extends React.Component {
  render() {
    return (
      <div className="navbar" role="navigation">
        <div className="link" onClick={() => this.props.callBackFunction('Home')}>
          Home
        </div>
        <span className="spacer"> | </span>
        <div className="link" onClick={() => this.props.callBackFunction('Repositories')}>
          Repositories
        </div>
        <span className="spacer"> | </span>
        <div className="link" onClick={() => this.props.callBackFunction('Languages')}>
          Languages
        </div>
        <span className="spacer"> | </span>
        <div className="link" onClick={() => this.props.callBackFunction('Users')}>
          Users
        </div>
        <span className="spacer"> | </span>
        <div className="link"  onClick={() => this.props.callBackFunction('Saved Graphs')}>
          Saved Graphs
        </div>
      </div>
    );
  }
}

export default navbar;