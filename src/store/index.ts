import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { getLocalState, setLocalState } from '../shared/localState';
import logger from 'redux-logger';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createAppStore = () => {
  const localState = getLocalState();
  const store = createStore(
    rootReducer,
    localState,
    compose(applyMiddleware(thunk, logger), composeEnhancers()),
  );

  store.subscribe(() => {
    setLocalState({
      //auth: store.getState().auth,
      user: store.getState().user,
    });
  });

  return store;
};

export default createAppStore;
