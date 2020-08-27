import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from './Headers';
import Homes from '../MyPustak/Home';
import getBooks from '../MyPustak/GetBooks';
import donateBooks from '../MyPustak/DonateBooks';
import proudDonors from '../MyPustak/ProudDonors';
import iitjee from '../MyPustak/IITJEE';
import { Image, View } from 'react-native';
import { Icon } from "react-native-elements";

const screens = {

    Homes: {
        screen: Homes,
        
        navigationOptions:  ({ navigation }) => {
            
            return{
            
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
            ),
            headerTitle: () =>
                        <Header navigation={navigation} />

            }      
        }
    },
    GetBooks: {
        screen: getBooks,
        navigationOptions: {
            title: "",
            headerLeft: () => <Image source={require('../Mimages/MyPustakLogo..png')}
            style={{width:120, height: 40, alignContent:'center', marginLeft: 120}} />,
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
    DonateBooks: {
        screen: donateBooks,
        navigationOptions: {
            title: "",
            headerLeft: () => <Image source={require('../Mimages/MyPustakLogo..png')}
            style={{width:120, height: 40, alignContent:'center', marginLeft: 120}} />,
            headerRight:  ( 
                <View style={{flexDirection:'row'}}>
            <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-search" : "md-search"} style=
                {{padding:10, color: "#5199e4"}}
            />
            <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-cart" : "md-cart"} style=
                {{padding:10, }}/>
                </View>
            ),
           

        }
    },
    ProudDonors: {
        screen: proudDonors,
        navigationOptions: {
            title: "",
            headerLeft: () => <Image source={require('../Mimages/MyPustakLogo..png')}
            style={{width:120, height: 40, alignContent:'center', marginLeft: 120}} />,
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
    IITJEE: {
        screen: iitjee,
        navigationOptions: {
            title: "",
            headerLeft: () => <Image source={require('../Mimages/MyPustakLogo..png')}
            style={{width:120, height: 40, alignContent:'center', marginLeft: 120}} />,
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
    }

}

const HomeStack = createStackNavigator(screens);
export default HomeStack;