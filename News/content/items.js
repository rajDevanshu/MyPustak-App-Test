import React, { Component } from 'react';
import {  ListItem, Thumbnail, Text, Left, Body, Right, Button, View } from 'native-base';
import Times from './Time';
import NewsMain from '../tabs/NewsScreen';


export default class NewsItems extends Component {

  
    constructor(props) {
        super(props);
        this.data= props.data;
            
    }
    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url,title});
    }
      render(){
                   
            return(
                <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage : 
                  "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/11/Pictures/_43500e16-dbcb-11ea-88ef-3d2d7bb3ceb2.jpg"
                  }} />
                </Left>
                <Body>
                  <Text note numberOfLines={3} style={{fontWeight: 'bold', color:'#515657', fontSize: 15}} >{this.data.title}</Text>
                  <Text note numberOfLines={3}>{this.data.description}</Text>
                  <View style={{flex: 1, flexDirection: 'row', marginTop: 8,marginLeft: 2}}>
                  <Text style={{fontSize: 9,}}>{this.data.source.name } : </Text>
                  <Times time={this.data.publishedAt} />                
                  </View>
                </Body>
                <Button transparent onPress={this.handlePress}>
                  <Text >View</Text>
                  </Button>
              </ListItem>
            );
        }  
}