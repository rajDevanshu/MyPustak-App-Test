import React, { Component } from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import searchTab from './tabNavigator/searchTab';
import Favourites from './tabNavigator/Favourites';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import SearcH from './bottomtab'

class Searches extends Component {
    render(){
        return(
            <SearcH />
            
        );
    }
}

export default Searches;


