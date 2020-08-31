import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView , Image, ScrollView } from 'react-native';
import {connect} from "react-redux";
import {getCategory} from '../redux/actions/CategoryAction';

   class GeetBooks extends Component {

     componentDidMount(){
          this.props.getCategory()

         // this.props.getCategorys()
      }

          render(){
        return(
           

            <SafeAreaView style={{margin: 100,flex: 1}}>

<View>
                <Text>MyPustak </Text>
                <Text> Get</Text>
                <Text>Books</Text>
                <Text>Yeah</Text>
            </View>


    <ScrollView style={{width: 240}} horizontal={true}>
    {
        this.props.getbooks.map((name) => (
                <View>
<Image key={name.book_id} source={{uri: `https://mypustak-6.s3.amazonaws.com/books/${name.thumb}`}}  style={{width: 120, height:150}} />
     <Text style={{color: 'red',}} key={name.book_id}>{name.title}</Text>
</View>
        ))
    }

    </ScrollView>
    <Text>Hello</Text>
    <Text>Hieeee</Text>
              
</SafeAreaView>
        )
        }
    }


    const mapStateToProps = ({CategoryReducer}) => {
      //CategoryReducer defined in reducer index file
      return {
        getbooks: CategoryReducer.getbooks,
  
      };
    };
    
    export default connect(mapStateToProps, {getCategory})(GeetBooks);


