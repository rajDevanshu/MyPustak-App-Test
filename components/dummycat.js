import React, { useState, Component } from 'react';
import { StyleSheet, View, Text,  Image } from 'react-native';
import { ListItem, Thumbnail, Body,Left } from 'native-base';



    class Categorys extends Component {

        constructor(props){
            super(props);
            this.data = props.data
        }

           
        render(){
                //console.log(this.data, "xxxx");
        return(

            // https://mypustak-6.s3.amazonaws.com/books/medium/+md/
            
             <ListItem style={{flexDirection: 'column', width: 140,}}>  
            <Thumbnail square
             source={{uri: `https://mypustak-6.s3.amazonaws.com/books/${this.data.thumb}`}} 
                 style={{width: 120, height:150}}
             />
            <Body style={{flexDirection: 'row'}}>
            
              <Text numberOfLines={2} style={{flexWrap: 'wrap'
              }}>{this.data.title}</Text>
            
            </Body>
            <Text style={{color: 'grey', textDecorationLine: 'line-through'}} >Rs. {this.data.price}</Text> 
            <Text style={{color: 'green'}}>Free*</Text>
            </ListItem> 
           
        );
    }};

   const styles = StyleSheet.create({
        card: {
            height: 320,
            width: 130,
            marginTop: 10, 
            
            padding: 6,
            
        
        }
    })
    export default Categorys;



