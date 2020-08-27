import React, { Component } from 'react';
import { View, Alert, ActivityIndicator, Text} from 'react-native';
import { Container, Content, List } from 'native-base';
import { getArticles } from '../Data/news';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import  NewsItems  from '../content/items';
import Modal from '../content/modal';


class Tabse extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
      this.setState({
        setModalVisible: true,
        modalArticleData: articleData
      });
  }

  handleModalClose = () => {
      this.setState({
        setModalVisible: false,
        modalArticleData: {}
      });
  }

 async componentDidMount() {

    getArticles().then(data => {
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
              <NewsItems onPress={this.handleItemDataOnPress} data={item} /> 
              )
            }}  />
           )
          
        return(
   
          <Container>
        <Content>
          { view }
        </Content>
        <Modal 
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this.handleModalClose}
            />        
      </Container>
        );
    }
}


export default Tabse;