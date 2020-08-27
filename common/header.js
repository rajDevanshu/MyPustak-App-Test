import React from 'react';
import { StyleSheet, View, Text, Image,SafeAreaView, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({ navigation }) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
            <Image source={require('../components/images/logo.png')} style={styles.headerImage} />
                <Text style={styles.HeaderTitle}>MyPustak</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      
        width: '110%',
        height: 55,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#008cff',
        left: -15,
    },
    HeaderTitle: {
         fontWeight: 'bold',
         fontSize: 20,
         color: 'white',
         letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 10,
        color: 'white',
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
    }
});
