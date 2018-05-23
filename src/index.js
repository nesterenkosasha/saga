import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import App from './App';
import UserId from './UserId';
import store from './store'
import AddNewUser from './AddNewUser';
import Users from './Users';
import FirstPage from './FirstPage'

const history = createHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div className="a">
      <Route path="/" component={FirstPage} />
      <Route path="/users" component={Users} />
      <Route path="/users/:id" component={UserId} />
      <Route path="/app" component={App} />
      <Route path="/addNewUser" component={AddNewUser} />

      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

