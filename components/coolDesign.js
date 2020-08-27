import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Apps = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}>3</Text>
                
            </View>
            <Text style={styles.row}></Text>
        </View>
    );
};

const styles= StyleSheet.create ({
  container: {
    backgroundColor: "#f878",
    flex: 1
  },
  row: {
      borderBottomColor: '#f22',
      padding: 120,
      borderBottomWidth: 5
  },
  box1: {
    position: 'absolute',
    top: 105,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  box2: {
    ...StyleSheet.absoluteFill,
    top:30,
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  box3: {
    position: 'absolute',
    top: 150,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  text: {
    color: '#FFF',
    fontSize: 90,
      }
});

export default Apps;