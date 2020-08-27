import React, { Component } from 'react';
import  { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';


class Homes extends Component {

    
    render() {
    return(
        
        <View style={styles.HomeScreen}>
                <View style={{position:'absolute', top: 0, left: 0}}>
                <Image source={require("./backgrou.png")} />
                </View>

        <Button block={true}
        onPress= {() => this.props.navigation.navigate('Search')}
        >
        <Text style={{color:'white'}}>Search Tab</Text>
        </Button>
        </View>
    );
    }
}

const styles =  StyleSheet.create ({
    HomeScreen : {
    flex: 1,
    justifyContent: 'flex-end'
    }

})
export default Homes;