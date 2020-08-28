// Imports: Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';

import Navigator from "./MRoutes/drawer";

// Imports: Screens


// Imports: Redux Persist Persister
import { store, persistor } from './Redux/store/Mstore';


// React Native: App
export default App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate 
        loading={null}
        persistor={persistor}
      >
        <Navigator/>
        
      </PersistGate>
    </Provider>
  );
};