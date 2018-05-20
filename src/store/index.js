import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const reducer = (state = {users:[], panding: false}, action) => {
  console.log("ACTIONS", action)
  const { type, payload } = action
  switch(type){
    case "setUsers" : {
      return state = Object.assign({}, state, {users: payload})
    }
  }
  return state
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = composeWithDevTools(
  applyMiddleware(
    sagaMiddleware
  )
)
const devTools = process.env.NODE_ENV !== 'production' && window.devToolsExtension
  ? window.devToolsExtension()
  : f => f;

const enhancers = compose(
  applyMiddleware(createSagaMiddleware()),
  devTools,
);


const store = createStore(reducer, middlewares, enhancers);


sagaMiddleware.run(rootSaga)

export default store





