import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';

import EmployeeDetails from "../Home"
import ShowEmployeeDetail from "../ShowEmployeeDetail";


const AppNavigator = createStackNavigator(
{
  EmployeeDetails:{
    screen: EmployeeDetails,
    navigationOptions: { header: null}
},
  ShowEmployeeDetail:{
    screen: ShowEmployeeDetail,
    navigationOptions: { header: null}
  },
}
);


export default createAppContainer(AppNavigator);