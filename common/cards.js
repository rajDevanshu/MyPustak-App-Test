import React from 'react';
import { StyleSheet, View,  ImageBackground } from 'react-native';

const Card = (props) => {
    return(
        <View style={styles.Card}>
            <View style={styles.cardText}>
                {props.children}                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Card: {
        borderRadius: 6,
        elevation: 6,
        shadowOffset: {width: 1, height: 1},
        backgroundColor: '#eee',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal : 4,
        marginVertical: 4,
            },
    cardText: {
        marginHorizontal: 18,
        marginVertical: 18
    }
});
export default Card;