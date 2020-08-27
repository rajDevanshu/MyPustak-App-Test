import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');
    class Types extends Component {
        render(){
        return(

            
        
            <View style={{ marginTop:70, marginHorizontal: 10}}>
            <View style={{height: width/2+30, width: width/2-25, marginTop: 5, 
            borderWidth: 0.5, borderColor: 'red'}}>
                                    <View style={{flex: 1, marginTop:-15,}}>
                                    <Image source={require('../components/images/index2.png')} 
                                        style= {{flex: 1, width: null, height: null,
                                        resizeMode: 'cover'}} />
                                    </View></View><View>
                                    <View style={{flex: 1, alignItems: "flex-start",  paddingLeft:10, borderWidth: 0.5}}>
                                        <Text style={{ fontSize: 18}}>Physics Class 11</Text>
                                        <Text style={{fontSize:14, fontWeight:'bold'}}>S. Chand</Text>
                                        <Text style={{fontSize:14, fontWeight:'bold'}} >FREE</Text>
                                    </View>
                                </View>
                                </View> 
            
        );
    }};
    export default Types;