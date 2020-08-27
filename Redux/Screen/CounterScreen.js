import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {increaseCount, decreaseCount} from '../actions/counterAction';
class Counters extends Component {
  
      
    render(){
        return(
           <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 50}}> 
            <TouchableOpacity onPress={()=>this.props.increaseCount()}>
            <Text style={{fontSize:20}}>Increase</Text>
            </TouchableOpacity>

                <Text style={{fontSize:20}}> {this.props.counter}</Text>

            <TouchableOpacity onPress={()=>this.props.decreaseCount()}>
                <Text style={{fontSize:20}}>Decrease</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        counter: state.counter
    }
}

function dispatchToProps(dispatch){
    return {
        increaseCount: (counter) => dispatch(counter),
        decreaseCount: (counter) => dispatch(counter),
    }
}

export default connect(mapStateToProps, dispatchToProps)(Counters);