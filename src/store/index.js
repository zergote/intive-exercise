import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import IndexSaga from '../sagas';

// Config list middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancers = compose;

// Create store with middlewares and redux dev tools
export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(applyMiddleware(...middlewares))
);

// Start Sagas
sagaMiddleware.run(IndexSaga);
