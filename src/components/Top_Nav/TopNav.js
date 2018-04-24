
import React from 'react';
import cx from 'classnames';
import './TopNav.css';

class top_nav extends React.Component {
  render() {
    return (
      <div className="navbar" role="navigation" align="right">
        <button className="link" onClick={() => this.props.callBackFunction('About')}>
         About 
        </button>
        <span className="spacer">   |   </span>
        <button className="link" onClick={() => this.props.callBackFunction('Contact')}>
          Contact
        </button>
        <span className="spacer"> | </span>
        <button className="link" onClick={() => this.props.callBackFunction('SignUp')}>
          Sign up
        </button>
        <span className="spacer"> | </span>
        <button className="link" onClick={() => this.props.callBackFunction('LogIn')}>
          Log in
        </button>
      </div>
    );
  }
}

export default top_nav;
