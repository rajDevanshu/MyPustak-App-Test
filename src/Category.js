import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView, TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {getCategory} from './redux/actions/CategoryAction';


class Category extends React.Component {
  componentDidMount() {
     this.props.getCategory();
  }
  render() {
    return (
      <SafeAreaView style={{margin: 50, fontSize: 22}}>
        <ScrollView horizontal={true}>
          <Text>Hello</Text>
          <TouchableOpacity><Text>Hello World</Text></TouchableOpacity>
          {this.props.books.map((book) => (
            <Text key={book.book_id}>{book.title}, {book.price}</Text>
            
          ))}
         
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginTop: 20,
  },
});
const mapStateToProps = ({CategoryReducer}) => {
  //CategoryReducer defined in reducer index file
  return {
    books: CategoryReducer.books,
  };
};

export default connect(mapStateToProps, {getCategory})(Category);