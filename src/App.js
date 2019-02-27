import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Content from './Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu />
        <Content />
      </div>
    );
  }
}

export default App;
