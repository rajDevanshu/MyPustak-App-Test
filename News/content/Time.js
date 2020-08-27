import React, { Component } from 'react';
import { Text } from 'native-base';
import moment from 'moment';

 class Times extends Component{

    constructor(props){
    super(props);
        this.date = props.time;
    }
    render() {
        const time= moment( this.date || moment.now() ).fromNow();
        return(
            <Text style={{fontSize: 9,}}>{time} </Text>
        );
    }
}

export default Times;