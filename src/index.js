import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './styles/index.css';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root'),
);












// <MuiThemeProvider theme={theme}>
// </MuiThemeProvider>



//const store = createStore(reducer, {}, enhancers);

//const devTools = process.env.NODE_ENV !== 'production' && window.devToolsExtension
//   ? window.devToolsExtension()
//   : f => f;
//
// const enhancers = compose(
//   applyMiddleware(createSagaMiddleware()),
//   devTools,
// );
//
// const reducer = (state = [1,2,3,4], action) => {
//   return state
// }
//import theme from './styles/material-ui-theme';

//import createSagaMiddleware from 'redux-saga';
// import { MuiThemeProvider } from 'material-ui/styles';
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
