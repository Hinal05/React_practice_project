import React, { Component } from 'react';
import layout from './layout.module.css';

import Header from '../../components/Header/header';

class Layout extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        footer
      </div>
    );
  }
}

export default Layout;
