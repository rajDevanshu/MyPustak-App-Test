import React, { Component } from 'react';
import { View, Alert, ActivityIndicator, Text} from 'react-native';
import { Container, Content, List } from 'native-base';
import { getArticless } from '../Data/newTwo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import  NewsItems  from '../content/items';

class Tabss extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      data: null
    }
  }

 async componentDidMount() {

    getArticless().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'something went wrong');
    }
    )

    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })

  }

 
    render() {

      console.log(this.state.data);

                  let view = this.state.isLoading ? (
            <View>
              <ActivityIndicator animating={this.state.isLoading}/>
              <Text style={{marginTop:10}}>Please Wait! </Text>
            </View>
           ) : ( 
            <List 
            dataArray={this.state.data}
            renderRow={(item) => {
              return ( 
              <NewsItems data={item} /> 
              )
            }}  />
           )
          
        return(
   
          <Container>
        <Content>
          { view }
        </Content>
      </Container>
        );
    }
}


export default Tabss;