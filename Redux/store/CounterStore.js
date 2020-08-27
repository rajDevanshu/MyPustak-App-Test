import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
//import reducer from '../reducer/counterReducer'
import { createLogger } from 'redux-logger';
//import rootReducer from '../reducers/index';
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducer/indexc';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["reducer"],
    blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer) //, rootReducer

const store = createStore(
    persistedReducer,
   
    applyMiddleware(createLogger(),
            ),
            
);

let persistor = persistStore(store);

export {store, persistor};