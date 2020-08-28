import { AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducer/MReducerIndex';
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
            applyMiddleware(createLogger(),
            ),
            );
        
        let persistor = persistStore(store);
        
        
export {store,persistor};