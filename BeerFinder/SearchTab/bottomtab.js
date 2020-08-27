import React, { Component } from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import searchTab from './tabNavigator/searchTab';
import Favourites from './tabNavigator/Favourites';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';

const SearcH = createBottomTabNavigator ({

    searchTab: { 
        screen: searchTab
    },
    Favourites: { 
        screen: Favourites
    },
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return(
            <Footer>
                <FooterTab>
                    <Button 
                    vertical 
                    active={props.navigation.state.index === 0}
                    onPress={()=> props.navigation.navigate('searchTab')}
                        >
                            <Icon name="beer" style={{color:'white'}}/>
                            <Text style={{color:'white'}}>Search</Text>
                    </Button>
                    <Button 
                    vertical 
                    active={props.navigation.state.index === 1}
                    onPress={()=> props.navigation.navigate('Favourites')}
                        >
                            <Icon name="star" style={{color:'white'}}/>
                            <Text style={{color:'white'}}>Favourites</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}) 


export default createAppContainer(SearcH);
