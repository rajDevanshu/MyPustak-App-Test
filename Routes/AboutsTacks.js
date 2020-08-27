import { createStackNavigator } from 'react-navigation-stack';
import TabsScrollableExample  from '../News/tabscreen'
import NewsMain from '../News/tabs/NewsScreen';
import React from 'react';

const screens = {
    Home: {
            screen: TabsScrollableExample,
            
    },
    TextInput: {
        screen: NewsMain,
        
    }
}

const AboutStacks = createStackNavigator(screens);
export default AboutStacks;