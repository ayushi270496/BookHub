import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  const renderItem = ({ item }) => {
    return <BookItem item={item} />;
  };

  return (
    <View>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.key.toString()}
      />
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({});
