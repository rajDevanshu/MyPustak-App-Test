import React, {Component} from 'react';
import { TouchableHighlight, Text, View, ScrollView, SafeAreaView, Image } from 'react-native';
import {connect} from 'react-redux';
import {getCategory} from './redux/actions/CategoryAction';

import {Button }from 'native-base';


class Category extends Component {

        componentDidMount(){
            this.props.getCategory()

           // this.props.getCategorys()
        }
    render(){
        return(
            <SafeAreaView style={{margin: 100,flex: 1}}>

            <ScrollView></ScrollView>
                <ScrollView style={{width: 240}} horizontal={true}>
                {
                    this.props.books.map((book, booki) => (
                            <View>
<Image key={book.book_id} source={{uri: `https://mypustak-6.s3.amazonaws.com/books/${book.thumb}`}}  style={{width: 120, height:150}} />
                 <Text style={{color: 'red',}} key={booki.book_id}>{booki.title}</Text>
            </View>
                    ))
                }

                </ScrollView>
                <Text>Hello</Text>
                <Text>Hieeee</Text>
                <ScrollView >
                {
                    this.props.bookss.map((bookz, bookie) => (
                    <View>
<Image key={bookz.book_id} source={{uri: `https://mypustak-6.s3.amazonaws.com/books/${bookz.thumb}`}}  style={{width: 120, height:150}} />
 
                        <Text style={{color: '#000'}} key={bookie.book_id}>{bookie.title}</Text>
                    </View>
                    ))
                }

                </ScrollView>

                <Button block={true}
        onPress= {()=>this.props.navigation.navigate('GeetBooks')}
        >


        <Text style={{color:'white'}}>Search Tab</Text>
        </Button>
                          
            </SafeAreaView>
        )
    }

}
const mapStateToProps = ({CategoryReducer}) => {
    //CategoryReducer defined in reducer index file
    return {
      books: CategoryReducer.books,
      bookss: CategoryReducer.bookss,
    };
  };
  
  export default connect(mapStateToProps, {getCategory})(Category);