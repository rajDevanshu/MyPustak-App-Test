import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity, Dimensions,Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button, Right, List, Container, Content } from 'native-base';
import Category from './Category';
import {Fiction} from '../actions/MIndex';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from "react-redux" 


class Home extends Component {

    constructor(props) {
        super(props);
            
        this.state = {
            isLoading: true,
            data: null,
            
        }
    }

    componentDidMount() {
      
        this.props.Fiction().then(data=> {
            this.setState({
                 isLoading: false,
                 data: data
            });
            }, error => {
                Alert.alert('Error', 'Something went wrong');
        })
    }
   

    render() {
        return(

            <SafeAreaView style={{flex: 1}} >
            <View style={{margin:80, width: 300, }}>
            <Text style={{color: '#1e88e5',
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 21,
    marginTop: -60, backgroundColor: "#eeeeee", padding: 8}}>Fiction & Non-Fiction</Text>  
        </View>

      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15, marginTop: -20, }}>
      

            <View style={{height: 320, marginHorizontal: 20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('./Navigation/index2.png')} 
                                                name= "S. chand (11)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('./Navigation/index2.png')} 
                                                name= "Physics (9)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('./Navigation/index2.png')} 
                                                name= "Maths (12)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('./Navigation/index2.png')} 
                                                name= "Chemistry (10)" price="Rs. 100"
                                            /> 
                </ScrollView>
            </View>

            <TouchableOpacity
                    underlayColor="transparent"
                    style={{padding: 20, borderWidth: 1, }}
                    onPress={() => {
                       
                        this.props.navigation.navigate("ShowEmployeeDetail")
                            }}
                >
                <Text>Submit</Text>
                </TouchableOpacity>
</View>

</SafeAreaView>
        )
    }
}

const mapDispatchToProps = (Fiction()) 
    {
        return{
         FictionBooks:() => dispatch(Fiction())           
        }
    }

    export default connect(
        null,
          {Fiction}
      )(Home); 