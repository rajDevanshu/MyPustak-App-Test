import React from 'react';
import { View, Image, StyleSheet, LogBox } from 'react-native';

const Apps = () => {
        return(
            <View style={styles.container}>
                <Image
        style={styles.tinyLogo}
        source={require('./images/vadonut.png')}
                />
                <Image
                style={styles.tinyLogo}
                source={require('./images/logo.png')}
                />

            </View>
        );
};
  const styles = StyleSheet.create({
      container: {
        padding: 60,
        flex:1,
        backgroundColor: "#f977"
      },
      tinyLogo: {
        width: 50,
        height:50
      }
  });
export default Apps;