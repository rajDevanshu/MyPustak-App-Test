import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homes from '../BeerFinder/HomeScreen/Home';
import Search from '../BeerFinder/SearchTab/SearchBar';

const screens = {

    Homes: {
        screen: Homes
    },
    Search: {
        screen: Search
    }

}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);