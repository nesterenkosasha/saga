import React, { Component } from 'react';
import NavBar from './components/navBar'
import Main from './components/main'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;

















// logo from './assets/logo.svg';

//import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import Button from 'material-ui/Button';
// import IconButton from 'material-ui/IconButton';
// import Icon from 'material-ui/Icon';
//
// import





// fetchUsers = () => {
//   fetch('http://localhost:3000/users')
//     .then(res => res.text())
//     .then(console.log)
//     .catch(alert);
// }













//
// <div className="App">
//   <AppBar position="fixed">
//     <Toolbar>
//       <IconButton className="App-menu-btn" color="inherit" aria-label="Menu">
//         <Icon> menu </Icon>
//       </IconButton>
//       <Typography variant="title" color="inherit" className="App-header-title">
//         React Admin
//       </Typography>
//       <Button color="inherit">Login</Button>
//     </Toolbar>
//   </AppBar>
//
//   <div className="App-intro">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p> To get started, edit <code>src/App.js</code> and save to reload. </p>
//   </div>
//
//   <Button
//     variant="raised"
//     color="secondary"
//     onClick={this.fetchUsers}
//   >
//     Check server
//   </Button>
// </div>
