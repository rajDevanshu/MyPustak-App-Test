import React, { Component } from 'react';
import  { View, Text, StyleSheet, Keyboard } from 'react-native';
import { Container, Content } from 'native-base';
import SearchHeader from './searchHeader';
import axios from 'axios';
import SearchResult from './searchResult';

class searchTab extends Component {

    static navigationOptions = ({
        header: null
    })

    state ={
        searchBeer: '',
        beerData: {},
        beerFound: false
    }

    beerSearch =() => {
        Keyboard.dismiss()
        const beerName = this.state.searchBeer.toLowerCase();
        const query = `https://pixabay.com/api/?key=17935507-3360243089422ba57bfcb7bf1&q=` + beerName + `&image_type=photo`

        axios.get(query)
        .then((response) => {
            var data = response.data.hits[0] ? response.data.hits[0] : false
            console.log(data)

            if(data){
                this.setState({
                    beerData: data,
                    beerFound: true
                })
            }
        }).catch((error) => {
            this.setState({
                beerFound: false
            })
        })
    }


    renderContent = () => {
        if(this.state.beerFound){
            return(
            <SearchResult beerData={this.state.beerData} />
            );
        }
        else{
            <View>
                <Text>Beer not Found</Text>
            </View>
        }
    }

    render() {
    return(
        <Container>
        <SearchHeader 
                    value={this.state.searchBeer}
                    onChangeText={(searchBeer) => this.setState({searchBeer})}
                    beerSearch={this.beerSearch}
                />
            <Content>
                
                {this.renderContent()}
            </Content>
        </Container>
    );
  }
 }

    export default searchTab;