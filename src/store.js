import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Logger with default options
import reducers from './reducers/index';

function envMiddlewares(env) {
  switch (env) {
    case 'production':
      return applyMiddleware(...reducers);
    default:
      return composeWithDevTools(
        applyMiddleware(...reducers)
      );
  }
}


export default createStore(reducers, envMiddlewares(process.env.NODE_ENV));
