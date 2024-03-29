import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//first_publish_year
const BookItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Text style={{fontSize: 20}}>{item.title}</Text>
      <Text style={{color: 'blue', fontSize: 20}}>{item.author_name}</Text>
      <Text style={{fontSize: 20}}>{item.first_publish_year}</Text>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    height: 100,
    width: '80%',
  },
});
