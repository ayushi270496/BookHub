import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from './SRC/Component/SearchBar';
import { fetchBooks } from './SRC/Component/BookService';
import BookList from './SRC/Component/BookList';

const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (query.trim() === '') return;
    setLoading(true);
    try {
      const data = await fetchBooks(query);
      setBooks(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={['#e8c1e8', '#1dfdd1', '#b645fc']}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <SearchBar setQuery={setQuery} query={query} onSearch={searchBooks} />
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <BookList books={books} />
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%', // Adjust width as needed
  },
});

export default App;
