import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack'
import AboutStack from './aboutStack';
import getBooks from '../MyPustak/GetBooks';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    },
    getBooks: {
        screen: getBooks,
        
    }
});

export default createAppContainer(RootDrawerNavigator);