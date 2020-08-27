import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';


    class CategoryH extends Component {
        render(){
        return(

                            <View style={{height: 140, width: 90, marginTop: 10, backgroundColor: 'white' }}>
                               <View style={{flex: 2, borderWidth:1, borderColor: '#dddd', marginLeft: 8}}>
                                        <Image source={this.props.imageUri} 
                                            style= {{flex: 1, width: null, height: null,
                                            resizeMode: 'cover'}} />
                                        </View>
                                        <View style={{flex: 2, paddingLeft: 20, color: 'grey'}}>
                                            <Text>{this.props.name}</Text>
                                </View>
                             </View>
        );
    }};
    export default CategoryH;