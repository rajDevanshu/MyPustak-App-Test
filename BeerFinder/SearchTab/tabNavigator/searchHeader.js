import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Container, Content, ListItem } from 'native-base';

class SearchHeader extends Component{
    render(){
        const beerData= this.props.beerData

        return(
                <Header
                style={{height:60}}
                
                searchBar
                rounded >
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        placeholder="Search your Flower"
                        onChangeText={this.props.onChangeText}
                        returnKeyType="search"
                        onSubmitEditing={this.props.beerSearch}
                    />
                </Item>
                
                </Header>
                
              
        );
    }
}
export default SearchHeader;
