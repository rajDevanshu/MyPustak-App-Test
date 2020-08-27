import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes';
import { View, Platform } from 'react-native';
import Dishdetails from './DishComponent.js';

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