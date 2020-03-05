import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [ logger ];

// logger -> display console.log for debug :D
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
