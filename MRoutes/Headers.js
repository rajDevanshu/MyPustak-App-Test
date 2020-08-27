import React from 'react';
import { StyleSheet, View, Text, Image,SafeAreaView, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Header({ navigation }) {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View >
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />           
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        marginLeft: -60,
        marginTop: -14,
        color: '#000',
    }
})
