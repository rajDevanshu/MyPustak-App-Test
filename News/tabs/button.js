import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Navig from './navi';

class Buttons extends  Component {

    render() {
           
        return(
    <View>
             <Button title='View' onPress={pressHandler} />
             
    </View>
        );

}
}
export default Buttons;