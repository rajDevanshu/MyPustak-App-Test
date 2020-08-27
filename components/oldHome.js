import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import Card from '../common/cards';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
 
    const [reviews, setreviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1},
        {title: 'Matilda, Fresh Air Breath', rating: 3, body: 'lorem ipsum', key: 2},
        {title: 'Olidada, Breath in the Shadows', rating: 4, body: 'lorem ipsum', key: 3},
    ]);

    return (
        <SafeAreaView  style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{ height:40, marginVertical: 10, backgroundColor: '#dddddd', borderBottomWidth: 0.5, borderBottomColor: 'grey'}}>
                        <View style={{flexshadowOffset:{width:0, height:0}, shadowColor:'#000', shadowOpacity: 0.2, elavation:1Direction: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20,
                        }}>
                            <Icon name="ios-search" size={15} style={{ marginHorizontal: 10, flexDirection: 'row', color: 'grey'}}/>
                            <TextInput 
                                underlineColorAndroid="transparent"
                                placeholder="Search Free Books"
                                placeholderTextColor="grey"
                                style={{flex: 1}}
                            />
                        </View>
                </View>     
                    <ScrollView
                        scrollEventThrottle={16}>
                            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                                <Text style={styles.upperText}>Which Book can we help you to find?</Text>

                                    <View style={{height: 130, marginHorizontal: 20}}>
                                        <ScrollView>
                                    <View style={{height: 130, width: 130}}>
                                        <View style={{flex: 2}}>
                                        <Image source={require('../components/images/index.png')} 
                            style= {{flex: 1, width: null, height: null, resizeMode: 'cover'}} />
                                        </View>
                                        <View style={{flex: 2}}>

                                        </View>
                                    </View>
                                        </ScrollView>
                                    </View>
                            </View>
                        </ScrollView>
                
            </View>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('TextInput', item)}>
                    <Card>
                        <Text>{ item.title }</Text>
                    </Card>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: '#333'
    },
    input: {
        height: 20,
        padding: 1,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
    },
    upperText: {
        fontWeight: "700",
        fontSize: 24,
        paddingHorizontal: 24,
        color: '#3c3c3c'
    },
    Images: {
        flex: 1,
        width:null,
        height: null,
        resizeMode: 'cover',
    }
});
export default Home;