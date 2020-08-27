import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/Home';
import Appss from '../components/TextInput';
import Header from '../common/header';
import React from 'react';


const screens = {
    Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => {
                return{
                headerTitle: () => <Header navigation={navigation} />,
                }
            }
    },
    TextInput: {
        screen: Appss,
        navigationOptions: {
            title: 'Books',
            headerStyle: { backgroundColor: '#008cff', headerTintColor: '#ddd' }
        }
    }
}
const HomeStack = createStackNavigator(screens);
export default HomeStack;