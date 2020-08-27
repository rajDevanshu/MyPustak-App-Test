import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes';
import { View } from 'react-native';
import Dishdetails from './DishComponent.js';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        dishes: DISHES,
        selectedDish: null
        }
    }

    onDishSelect(dishId){
        this.setState({selectedDish: dishId})
    }

        render(){
            return(
                <View>
                <Menu dishes = {this.state.dishes}
                onPress={(dishId) => this.onDishSelect(dishId)} />
<Dishdetails dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </View>
            );
        }
}

export default Main;