import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions,Alert } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button, Right } from 'native-base';
import Slidess from './Mslide';
import Category from '../components/categoryImage';
import { getBook } from './config/books';

const {height, width} = Dimensions.get('window');

class Homes extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null
        }
    }

    componentDidMount() {
        getBook().then(data=> {
            this.setState({
                 isLoading: false,
                 data: data
            });
            }, error => {
                Alert.alert('Error', 'Something went wrong');
        })
    }
    render(){
        
            console.log(this.state.data);
        return(
            <SafeAreaView  style={{flex: 1}}>
            <ScrollView>
            <View  style={styles.view}>
                
                <Button block={true}
        onPress= {() => this.props.navigation.navigate('GetBooks')} style={styles.button}
        >
       
            <Image source={require('../Mimages/getBooks.png')} style={styles.imageTab}/>
            
            <Text style={styles.buttoText}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}Get Books</Text>
        </Button>

        <Button block={true} style={styles.button}
        onPress= {() => this.props.navigation.navigate('DonateBooks')}
        >
            <Image source={require('../Mimages/donateBooks.png')} style={styles.imageTab}/>
            <Text style={styles.buttoText}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}Donate Books</Text>
        </Button>
        <Button block={true} style={styles.button}
        onPress= {() => this.props.navigation.navigate('ProudDonors')}
        >    
            <Image source={require('../Mimages/getBooks.png')} style={styles.imageTab}/>
            <Text style={styles.buttoText}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}Proud Donors</Text>
        </Button>
        <Button block={true} style={{width:70, height:80,margin:6,marginTop: -15,marginBottom: -5,paddingTop: 0,
        paddingLeft: 1,
        paddingRight: 35,
        backgroundColor: 'transparent',
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0,
               },
         shadowOpacity: 0,
         shadowRadius: 0,
         elevation: 0,}}
        onPress= {() => this.props.navigation.navigate('IITJEE')}
        >
            
            <Image source={require('../Mimages/iit.png')} style={{width:60, height: 50, marginRight: 104}}/>
            <Text style={{color: 'black',
        fontSize:12,
        fontWeight: 'bold',       
        marginLeft: -155,
        textAlign:"left", 
        }}>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}IIT-JEE</Text>
           
        </Button>
     
            
             </View>
                
      <View style={{margin: 20, height: 300}}>
          <Slidess />
      </View>

                <View>
                <Text style={styles.TextBooks}>Competitive Exams</Text>  
                </View>

      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15, marginTop: -60, }}>
      

                                    <View style={{height: 320, marginHorizontal: 20}}>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                            <Category imageUri={require('../components/images/index.png')} 
                                                name= "S. chand (11)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('../components/images/index2.png')} 
                                                name= "Physics (9)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('../components/images/index3.png')} 
                                                name= "Maths (12)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('../components/images/index4.png')} 
                                                name= "Chemistry (10)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('../components/images/index.png')} 
                                                name= "Biology (10)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('../components/images/index2.png')} 
                                                name= "Physics (9)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('../components/images/index3.png')} 
                                                name= "Mathematics (9)" price="Rs. 100"
                                            />
                                            <Category imageUri={require('../components/images/index4.png')} 
                                                name= "S. chand (11)" price="Rs. 100"
                                            />
                                        </ScrollView>
                                    </View>                                       
                            </View>

            <View>
                <Text style={{color: '#1e88e5',
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 21,
        marginTop: -60, backgroundColor: "#eeeeee", padding: 8}}>Fiction & Non-Fiction</Text>  
            </View>

 <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15, marginTop: -20, }}>
      

                    <View style={{height: 320, marginHorizontal: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Category imageUri={require('../components/images/index4.png')} 
                                name= "S. chand (11)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index3.png')} 
                                name= "Maths (12)" price="Rs. 100"
                            />
                           
                            <Category imageUri={require('../components/images/index.png')} 
                                name= "S. chand (11)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index2.png')} 
                                name= "Physics (9)" price="Rs. 100"
                            />
                            
                            <Category imageUri={require('../components/images/index4.png')} 
                                name= "Chemistry (10)" price="Rs. 100"
                            />
                            
                            <Category imageUri={require('../components/images/index2.png')} 
                                name= "Physics (9)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index3.png')} 
                                name= "Mathematics (9)" price="Rs. 100"
                            />
                             <Category imageUri={require('../components/images/index.png')} 
                                name= "Biology (10)" price="Rs. 100"
                            />
                        </ScrollView>
                    </View>
          
          
</View>

<View>
                <Text style={{color: '#1e88e5',
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 21,
        marginTop: -60, backgroundColor: "#eeeeee", padding: 8}}>School & Children Books</Text>  
            </View>

 <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15, marginTop: -20, }}>
      

                    <View style={{height: 320, marginHorizontal: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Category imageUri={require('../components/images/index4.png')} 
                                name= "S. chand (11)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index3.png')} 
                                name= "Maths (12)" price="Rs. 100"
                            />
                           
                            <Category imageUri={require('../components/images/index.png')} 
                                name= "S. chand (11)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index2.png')} 
                                name= "Physics (9)" price="Rs. 100"
                            />
                            
                            <Category imageUri={require('../components/images/index4.png')} 
                                name= "Chemistry (10)" price="Rs. 100"
                            />
                            
                            <Category imageUri={require('../components/images/index2.png')} 
                                name= "Physics (9)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index3.png')} 
                                name= "Mathematics (9)" price="Rs. 100"
                            />
                             <Category imageUri={require('../components/images/index.png')} 
                                name= "Biology (10)" price="Rs. 100"
                            />
                        </ScrollView>
                    </View>
          
          
</View>

<View>
                <Text style={{color: '#1e88e5',
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 21,
        marginTop: -60, backgroundColor: "#eeeeee", padding: 8}}>University Books</Text>  
            </View>

 <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15, marginTop: -20, }}>
      

                    <View style={{height: 320, marginHorizontal: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Category imageUri={require('../components/images/index4.png')} 
                                name= "S. chand (11)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index3.png')} 
                                name= "Maths (12)" price="Rs. 100"
                            />
                           
                            <Category imageUri={require('../components/images/index.png')} 
                                name= "S. chand (11)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index2.png')} 
                                name= "Physics (9)" price="Rs. 100"
                            />
                            
                            <Category imageUri={require('../components/images/index4.png')} 
                                name= "Chemistry (10)" price="Rs. 100"
                            />
                            
                            <Category imageUri={require('../components/images/index2.png')} 
                                name= "Physics (9)" price="Rs. 100"
                            />
                            <Category imageUri={require('../components/images/index3.png')} 
                                name= "Mathematics (9)" price="Rs. 100"
                            />
                             <Category imageUri={require('../components/images/index.png')} 
                                name= "Biology (10)" price="Rs. 100"
                            />
                        </ScrollView>
                    </View>
          
          
</View>


    </ScrollView>
        </SafeAreaView>
        )
    }
}



const styles = StyleSheet.create({

    button: {
        width:70,
        height:80,
        margin:7,
        marginTop: -15,
        marginBottom: -5,
        paddingTop: 0,
        paddingLeft: 1,
        backgroundColor: 'transparent',
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 0,
               },
         shadowOpacity: 0,
         shadowRadius: 0,
         elevation: 0,
    },
    view: {
         flexDirection: 'row',
         marginLeft: 13,
         marginTop: 30,
         borderColor: '#ede5e5',
         padding:25,
         paddingLeft: 10,
         marginRight: 13,
         borderRadius: 10,
         backgroundColor: '#f1f9fc',
         shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
               },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 4,
    },
    buttoText:{
        color: 'black',
        fontSize:12,
        fontWeight: 'bold',       
        marginLeft: -45
    },
    imageTab: {
        width: 40,
        height: 50,
        
    },
    TextBooks: {
        color: '#1e88e5',
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 21,
        marginTop: -100
    }
})
export default Homes;