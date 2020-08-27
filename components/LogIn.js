import React from 'react';
import {View, Text, Button, Image, TextInput, TouchableOpacity, StyleSheet, ActionSheetIOS, Dimensions } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const {height}=Dimensions.get('window');
const height_logo = height *0.28;

const LogIn =() => {

        const[data, setData] = React.useState({
            email: '',
            password: '',
            check_Text: false,
            secureTextEntry: true

        })

            const handlePasswordChange = (val) => {
                setData({
                    ...data,
                    password: val
                })
            }

            const updateSecureText = () => {
                setData({
                    ...data,
                    secureTextEntry: !data.secureTextEntry
                })
            }

    return(
 <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../Mimages/MyPustakLogo..png')} style={{
             alignItems:'center', width: 70, alignSelf: 'center'
        ,height: 22, margin: 8
            }}
                    />
            <Text style={styles.header}>Welcome Back!{"\n"}</Text>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold',
           }}>
            Get acess to your Orders, Profile and Recommmendations</Text>
        </View>
        <Animatable.View style={styles.footer} animation="bounceInUp" >
            <Text style={styles.text_footer}>E-mail</Text>
           
            <View style={{borderBottomWidth: 1, borderBottomColor: "grey"}}>
            
            <TextInput
                    placeholder="Enter E-mail*"
                    style={styles.TextInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
            />
                </View>

                <Text style={{color: "grey",
        fontSize: 15, paddingTop: 14, color:'#1e88e5'}}>Password{"\n"}</Text>

            <View style={{borderBottomWidth: 1, borderBottomColor: "grey", flexDirection: 'row' }}>
                <Feather 
                    name="lock"
                    color= "grey"
                    size={15}
                    
                    />
            <TextInput
                    placeholder="Enter Password *"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.TextInput}
                    autoCapitalize="none"
            />

            
            <TouchableOpacity onPress={updateSecureText} >

                {data.secureTextEntry ?
             <Feather 
                    name="eye-off"
                    color= "grey"
                    size={15}
                    />
                    :
                    <Feather 
                    name="eye"
                    color= "grey"
                    size={15}
                    />
                }
                
            </TouchableOpacity>
           
                </View>
                            <TouchableOpacity >
                                <Text style={{textAlign: 'right', marginTop: 5}}>Forgot Password?</Text>
                            </TouchableOpacity>
                <View style={{ paddingTop: 10}}>
                
                    <Button title='login'>
        
                    </Button>
            </View>
                        <Text style={{textAlign:'center', paddingTop: 10, paddingBottom:10,
                         color: 'grey'}}>OR</Text>

         <View style={{  borderWidth: 1, borderColor:'#1e88e5', padding: 4}}>
                
                    <TouchableOpacity>
                        <Text style={{textAlign: 'center', padding:3, color:'#1e88e5',}}>LogIn with OTP</Text>
                    </TouchableOpacity>
        
                    
            </View>
                    <Text style={{textAlign:'center', paddingTop: 7, paddingBottom:7,
                         color: 'grey'}}>OR</Text>
                            <View style={{alignSelf: 'center', flexWrap: 'wrap'}}>
                         <TouchableOpacity style={{backgroundColor: "#1e88e5", padding: 6, }}>
                             
                             <Text style={{color: 'white', fontWeight: 'bold'}}>G-SignIn</Text>
                           </TouchableOpacity>  
                           </View>
                           <View style={{flexDirection: 'row', paddingTop: 10, alignSelf: 'center'}}>
                        <Text>New at MyPustak?        
                        </Text>
                        <TouchableOpacity><Text style={{color: "#1e88e5"}}> Create an Account</Text></TouchableOpacity>
                        </View>
                </Animatable.View>       

    </View>
    );
}
export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1e88e5",
        
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        fontSize: 21,
        fontWeight: 'bold',
           
    },
    footer: {
        flex: 3,
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 40,
        marginTop: 35
    },
    text_footer: {
        color:'#1e88e5',
        fontSize: 15
    },
    TextInput: {
        
        color: '#000',
        paddingLeft: 18,
        marginRight: 105

    }

})