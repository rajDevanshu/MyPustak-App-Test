import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput,  SafeAreaView,TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import Card from '../common/cards';
import Icon from 'react-native-vector-icons/Ionicons';
import Types from '../components/Types';
const {height, width} = Dimensions.get('window');

const Appss = ({navigation}) => {
   
   
    
        return (
            <SafeAreaView  style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={{ height:40, marginVertical: 10, backgroundColor: '#dddddd', borderBottomWidth: 0.5, borderBottomColor: 'grey'}}>
                            <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset:{width:0, height:0}, shadowColor:'#000', shadowOpacity: 0.2, elavation:1}}>
                                <Icon name="ios-search" size={15} style={{ marginHorizontal: 10, flexDirection: 'row', color: 'grey'}}/>
                                <TextInput 
                                    underlineColorAndroid="transparent"
                                    placeholder="Search Free Books"
                                    placeholderTextColor="grey"
                                    style={{flex: 1}}
                                />
                            </View>
                    </View>     
                        <ScrollView
                            scrollEventThrottle={16}>
                       
                                  <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15, marginTop: -75, }}>
                                  <View style={{flexDirection: 'row', flexWrap: 'wrap' }}>
                                            <Types />
                                            <Types />
                                            <Types />
                                            <Types />
                                   </View>
                                </View>
                         </ScrollView>
                </View>           
                </SafeAreaView>
        
    )
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: '#333'
    },
    input: {
        height: 20,
        padding: 1,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
    },
    upperText: {
        fontWeight: "700",
        fontSize: 21,
        paddingHorizontal: 24,
       backgroundColor: '#1e88e5',
       color: 'white'
    },
    Images: {
        flex: 1,
        width:null,
        height: null,
        resizeMode: 'cover',
    }
});
export default Appss;