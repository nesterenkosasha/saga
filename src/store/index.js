import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { reducerUsers, reducerPanding, reducerPopUp, reducerOpen, reducerchangeToInput } from '../reducers'
import reducerAuth from '../reducers/auth'
import reducerFilter from '../reducers/reducerFilter'
import rootSaga from '../sagas'

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
  reducerPopUp,
  reducerOpen,
  reducerAuth,
  reducerFilter,
  reducerchangeToInput,
  router: routerReducer
});



const store = createStore(reducer, {}, enhancers);
sagaMiddleware.run(rootSaga)

export default store
