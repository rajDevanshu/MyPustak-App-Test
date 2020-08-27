import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { ListItem, Thumbnail } from 'native-base';



    class Category extends Component {
    render(){
        return(

           
                        <View style={{ 
                                    borderTopColor: "grey", borderTopWidth: 0.4
                        }}>
                                    <View style={styles.card}>
                                        <View style={{flex: 2, borderWidth:1,
                                     marginLeft: 10}}>
                                        <Image source={this.props.imageUri} 
                                            style= {{flex: 1, width: null, height: null,
                                            resizeMode: 'cover'}} />
                                        </View>
                                        <View style={{flex: 2, paddingLeft: 20, flexWrap: "wrap"}}>
                                            <Text style={{fontSize: 15}}>{this.props.name}</Text>
                                            <Text style={{ color: "grey", paddingLeft: 7, fontSize: 14,
                                            textDecorationLine: 'line-through'}}>{this.props.price}</Text>
                                            <Text style={{color: "green", paddingLeft: 7}}>Free*</Text>
                                        </View>
                                    </View>
                                    </View>
        );
    }};

   const styles = StyleSheet.create({
        card: {
            height: 320,
            width: 130,
            marginTop: 10, 
            
            padding: 6,
            
        
        }
    })
    export default Category;