import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import Card from '../common/cards';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/categoryImage';
import CategoryH from '../components/categoryHeader';

const {height, width} = Dimensions.get('window');

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
                        <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20,
                        shadowOffset:{width:0, height:0}, shadowColor:'#000', shadowOpacity: 0.2, elavation:1}}>
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
                   
             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={() => navigation.navigate('TextInput')}>
                        <CategoryH imageUri={require('../components/images/index6.png')} 
                                                name= "Categories"
                            />   
                    </TouchableOpacity>               
                    <TouchableOpacity onPress={() => navigation.navigate('TextInput')}>
                        <CategoryH imageUri={require('../components/images/index7.png')} 
                                                name= "Novels"
                                            />   
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('TextInput')}>
                        <CategoryH imageUri={require('../components/images/index8.png')} 
                                                name= "NCERT"
                                            />   
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('TextInput')}>
                        <CategoryH imageUri={require('../components/images/index9.png')} 
                                                name= "University"
                                            />   
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('TextInput')}>
                        <CategoryH imageUri={require('../components/images/index10.png')} 
                                                name= "UPSC"
                                            />   
                    </TouchableOpacity>  
                    <TouchableOpacity onPress={() => navigation.navigate('TextInput')}>
                        <CategoryH imageUri={require('../components/images/index11.png')} 
                                                name= "Medical"
                                            />   
                    </TouchableOpacity>  
                    </ScrollView>

                      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15, marginTop: -45, }}>
                                <Text style={styles.upperText}>Let's Find Your Books.</Text>

                                    <View style={{height: 320, marginHorizontal: 20}}>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                            <Category imageUri={require('../components/images/index.png')} 
                                                name= "S. chand (11)"
                                            />
                                            <Category imageUri={require('../components/images/index2.png')} 
                                                name= "Physics (9)"
                                            />
                                            <Category imageUri={require('../components/images/index3.png')} 
                                                name= "Maths (12)"
                                            />
                                            <Category imageUri={require('../components/images/index4.png')} 
                                                name= "Chemistry (10)"
                                            />
                                            <Category imageUri={require('../components/images/index.png')} 
                                                name= "Biology (10"
                                            />
                                            <Category imageUri={require('../components/images/index2.png')} 
                                                name= "Physics (9)"
                                            />
                                            <Category imageUri={require('../components/images/index3.png')} 
                                                name= "Mathematics (9)"
                                            />
                                            <Category imageUri={require('../components/images/index4.png')} 
                                                name= "S. chand (11)"
                                            />
                                        </ScrollView>
                                    </View>
                                        <View style={{marginTop: -110, }}>
                                        <Text style={styles.upperText}>
                                            India's Best Selling Books
                                        </Text>
                                        <Text style={{fontWeight: '100', color: 'grey', marginTop: 4, marginLeft: 20}}>
                                            The Best Selling Novels in Romantic,
                                            Motivational & Thriller Genre:
                                        </Text>
                                        <View style={{width: width-25, height: 330, marginTop: 20}}>
                                            <Image
                                            source={require('../components/images/index5.png')}
                                            style={{width: null, height: null, resizeMode: 'cover',
                                            borderRadius:6, marginLeft: 20, borderColor: '#1e88e5', borderWidth: 1, flex: 1}}
                                            />
                                        </View>
                                        </View>
                            </View>
                     </ScrollView>
            </View>           
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
        fontSize: 21,
        paddingHorizontal: 24,
       backgroundColor: '#1e88e5',
       color: 'white'
    },
    Images: {
        flex: 1,
        width:null,
        height: null,
        resizeMode: 'cover',
    }
});
export default Home;