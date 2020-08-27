import React, { Component } from 'react';
import {View, Text, Image, Button, StyleSheet } from 'react-native';
import { Content, ListItem, List} from 'native-base';

class SearchResult extends Component {
    render(){
        const beerData= this.props.beerData

        return(
            <Content>
                <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={{uri: beerData.userImageURL}} style={{height: 200, width: 300 }} />
                </ListItem>
                <ListItem itemDivider  style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text>Tags :</Text>
                    </View>
                    <View>
                        <Button onPress={() => this.addToFavourites(beerData.name)} title="+Add To Favourite"/>
                      </View>
                </ListItem>
                <ListItem>
                <View>
                    <Text>{beerData.tags}</Text>
                    </View>
                    
                </ListItem>
                <ListItem itemDivider>
                    <Text>Image Size</Text>
                </ListItem>
                <ListItem>
                    <Text>{beerData.imageSize}</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Image Height</Text>
                </ListItem>
                <ListItem>
                    <Text>{beerData.imageHeight}</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Downloads</Text>
                </ListItem>
                <ListItem>
                    <Text>{beerData.downloads}</Text>
                </ListItem>
            </Content>
        );
    }
}
export default SearchResult;