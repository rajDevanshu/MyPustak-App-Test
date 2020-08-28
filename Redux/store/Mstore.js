import { AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducer/MReducerIndex';
import thunk from 'redux-thunk';
// Middleware: Redux Persist Config

        const persistConfig = {
            key: 'roots',
            storage: AsyncStorage,
            whitelist: ["FictionReducer"],
            blacklist: [],
        };
        
        const persistedReducer = persistReducer(persistConfig, rootReducer)
        
        const store = createStore(
            persistedReducer,
            undefined,
            applyMiddleware(createLogger(), thunk
            ),
            );
        
        let persistor = persistStore(store);
        
        
export {store,persistor};