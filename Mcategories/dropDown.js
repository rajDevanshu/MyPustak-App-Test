import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class Example extends Component {

       constructor(props){
         super(props);
           this.state={
            data: [{
              value: 'Fruit',
              label: 'Banana'
            }, {
              value: 'Vegetable',
              label: 'Tomat'
            }, {
              value: 'Fruit',
              label: 'Pear'
            }],
            value: ''
            }
          }
          componentDidMount() {

        const value = this.state.data[0].value;
        this.setState({
        value
        });
        }
  render() {
  
    return (
        <View style={styles.container}>
        <Dropdown
        value={this.state.label}
        data={this.state.data}
        pickerStyle={{borderBottomColor:'transparent',borderWidth: 0}}
        dropdownOffset={{ 'top': 0 }}
        containerStyle = {styles.dropdown}
        onChangeText={(value)=> {this.setState({
          value
        });}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      marginTop: 20
    },
    dropdown: {
      width: '60%',
    }
  });