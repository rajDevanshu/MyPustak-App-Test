import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props){
    const dish = props.dish;

    if(dish!=null){
        return(
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}
            >
            <Text style={{margin:10}}>
                {dish.discription}
            </Text>
            </Card>
        );
    }
    else{
        return(<View></View>);
    }
}

function Dishdetails(props){
    return(<RenderDish dish={props.dish} />);
}
export default Dishdetails;