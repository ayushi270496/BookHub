import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const BookItem = ({ item }) => {
  const bookCoverUnavailable = require('./Assets/notavailavleimage.png');
  return (
    <View style={styles.item}>
      {item.cover_i ? (
        <Image
          source={{ uri: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` }}
          style={styles.coverImage}
        />
      ) : (
        <Image
          source={bookCoverUnavailable}
          style={styles.coverImage}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author_name?.join(', ')}</Text>
        <Text style={styles.publishYear}>First Publish Year: {item.first_publish_year}</Text>
      </View>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    width: windowWidth * 0.8, // 80% of window width
  },
  coverImage: {
    width: '30%', // 30% of parent width
    aspectRatio: 3 / 4, // Aspect ratio for standard book cover dimensions
    resizeMode: 'cover',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  author: {
    color: 'blue',
    fontSize: 18,
    marginBottom: 5,
  },
  publishYear: {
    fontSize: 16,
  },
});
