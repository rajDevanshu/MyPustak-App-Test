import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Appsses from '../components/getBook';
import DonateBooks from '../components/donateBook';


const screens = {
    getBook: {
            screen: Appsses, 
    },

    DonateBook: {
        screen: DonateBooks,
            }
}

const BottomStack = createBottomTabNavigator(screens);
export default BottomStack;