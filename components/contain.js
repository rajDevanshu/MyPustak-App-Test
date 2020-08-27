import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './MainScreen'; 
import AboutScreen from './AboutScreen';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetails: { screen: Dishdetails}
}, {    
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
        }
    }
})

const Container = createAppContainer(MenuNavigator);

export default Container; 