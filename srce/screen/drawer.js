import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
//import HomeStack from './HomeStack'
import Category from '../Category';
import GeetBooks from './getBooks';
import AppNavigator from './stackNavigation'
//import Category from '../Category';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppNavigator
    },
    About: {
        screen: GeetBooks
    },
    
});

export default createAppContainer(RootDrawerNavigator);