import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from "react-redux";

class getBooks extends Component {
    render(){
        return(
            <View>
                <Text>MyPustak </Text>
                <Text> Get</Text>
                <Text>Books</Text>
                <Text>Yeah</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        FictionData: state.MReducer.FictionData
    }
  }
  
  export default connect(mapStateToProps,null)(getBooks)

