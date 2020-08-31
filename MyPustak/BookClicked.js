import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Clicked extends Component {

    

        
  render() {
    return (
      <Container >
        <Header />
        <Content>
          <Card >
            
            <CardItem cardBody> 
              <Image source={require('../components/images/index2.png')} 
              style={{height: 380, width: null, flex: 1, margin: 20, marginTop: 20, }}/>
            </CardItem>
            
          </Card>
        </Content>
      </Container>
    );
  }
}