import { createStackNavigator } from 'react-navigation-stack';

import LogIn from '../components/LogIn';
import Header from '../common/header';
import React from 'react';

const screens = {
    About: {
            screen: LogIn,
            navigationOptions: ({ navigation }) => {
                return{
                headerTitle: () => <Header navigation={navigation} />,
                }
            }
}
}

const loginStack = createStackNavigator(screens);
export default loginStack;