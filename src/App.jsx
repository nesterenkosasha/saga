import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './assets/logo.svg';
import './App.css';
import Menu from './Menu.js'

class App extends Component {
  
  render() {
    console.log(this.props)
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

        <div className="main" >
          <aside className="navBar">
          <Menu />
          </aside>
        </div>


      </div>
    );
  }
}

export default App;
