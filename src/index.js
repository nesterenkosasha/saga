import React from 'react';
import ReactDOM from 'react-dom';

import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Route, Router, browserHistory } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import Admins from './Admins';
import App from './App';
import AddNewUser from './AddNewUser.js';
import Menu from './Menu';
import './App.css';
import { reducerUsers, reducerPanding } from './reducers'
import rootSaga from './sagas'
import Users from './Users.js';
import theme from './styles/material-ui-theme';
import './styles/index.css';

const devTools = process.env.NODE_ENV !== 'production' && window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

  const history = createHistory()
  const middleware = routerMiddleware(history)

  const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
  applyMiddleware(sagaMiddleware, middleware),
  devTools,
);

const reducer = combineReducers({
  reducerUsers,
  reducerPanding,
  router: routerReducer
});



const store = createStore(reducer, {}, enhancers);
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div className="a">
      <Route path="/" component={Menu} />
      <Route path="/users" component={Users} />
      <Route path="/app" component={App} />
      <Route path="/admins" component={Admins} />
      <Route path="/addNewUser" component={AddNewUser} />

      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
