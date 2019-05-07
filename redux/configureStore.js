import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import restApiInjector from './middlewares/restApiInjector';

import user from './user';

export default () => {
  const rootReducer = combineReducers({
    user,
  });

  // const rootSaga = function* () {
  // };

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    restApiInjector,
    apiMiddleware,
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') middlewares.push(logger);

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );

  // sagaMiddleware.run(rootSaga);

  return store;
};
