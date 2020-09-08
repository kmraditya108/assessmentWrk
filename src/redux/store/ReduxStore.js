import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga'
import rootReducer from '../reducer/index';
import rootSaga from '../saga/index'

const sagaMiddleware = createSagaMiddleWare();
const AppStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default AppStore;


