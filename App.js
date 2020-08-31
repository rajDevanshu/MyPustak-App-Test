import React from 'react';
import {Provider} from 'react-redux';

import { SafeAreaView, StyleSheet } from 'react-native';

import { Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './srce/screen/drawer';
import Category from './srce/Category';
import store from './srce/redux/store'

const App: () => ReactNode = () => {
  return (
    <>
     
      <Provider store={store}>

         <AppNavigator/>

    </Provider>
        
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
