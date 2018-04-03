/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
//import withStyles from 'isomorphic-style-loader/lib/withStyles';
import './TopNav.css';
//import div from '../div';

class top_nav extends React.Component {
  render() {
    return (
      <div className="topnav" role="navigation">
        <div className="link" >
          About
        </div>
       <div className="link" >
          Contact
        </div>
        <span className="spacer"> | </span>
        <div className="link">
          Log in
        </div>
        <span className="spacer">or</span>
        <div className="link" >
          Sign up
        </div>
      </div>
    );
  }
}

export default top_nav;
