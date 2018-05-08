import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className="App-menu-btn" color="inherit" aria-label="Menu">
              <Icon> menu </Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className="App-header-title">
              React Admin
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <p className="App-intro">
          <img src={logo} className="App-logo" alt="logo" />
          To get started, edit <code>src/App.js</code> and save to reload.

          <Button variant="raised" color="secondary"> Get started </Button>
        </p>
      </div>
    );
  }
}

export default App;
