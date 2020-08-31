import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
// import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import routeReducer from './reducers/index';

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
    routeReducer,
    composeEnhancers(applyMiddleware(createLogger(), thunk)),
);

export default store;