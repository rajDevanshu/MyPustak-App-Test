import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {Image, View, Text, } from 'react-native';
import { Icon } from "react-native-elements";
import Category from '../Category';
//import AboutStack from './aboutStack';
import GeetBooks from './getBooks';

const screens = {

    Homes: {
        screen: Category,
        
    
    },
    GeetBooks: {
        screen: GeetBooks,
    }

}

const AppNavigator = createStackNavigator(screens);
export default AppNavigator;