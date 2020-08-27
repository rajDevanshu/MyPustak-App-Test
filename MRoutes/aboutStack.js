import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View } from 'react-native';
import { Icon } from "react-native-elements";
import About from "../MyPustak/About";

const screens = {

    About: {
        screen: About,
        
        navigationOptions: {
            title: "",
            headerLeft: () => <Image source={require('../Mimages/MyPustakLogo..png')}
            style={{width:120, height: 40, alignContent:'center', marginLeft: 120, marginBottom: 10}} />,
            headerRight:  ( 
                <View style={{flexDirection:'row'}}>
            <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-search" : "md-search"} style=
                {{padding:10, color: "#5199e4"}}
            />
            <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-cart" : "md-cart"} style=
                {{padding:10, }}/>
                </View>
            )
        }
    },

}

const AboutStack = createStackNavigator(screens);
export default AboutStack;