import { applyMiddleware, createStore } from 'redux';

// Logger with default options
import logger from 'redux-logger'
import reducers from './reducers/index';

export default createStore(reducers, applyMiddleware(logger));
