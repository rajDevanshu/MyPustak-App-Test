import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, View } from 'react-native';
import { Icon } from "react-native-elements";
import GeetBooks from "./getBooks";

const screens = {

    About: {
        screen: GeetBooks,
      
    },

}

const AboutStack = createStackNavigator(screens);
export default AboutStack;