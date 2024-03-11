import React, { useEffect, useRef, useContext } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';
import ApiContex from './ApiContex';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useContext(ApiContex);
  const searchText = useRef('');

  useEffect(() => {
    searchText.current.focus();
  }, []);

  const handleSubmit = () => {
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lord of the rings");
      setResultTitle("Please enter something...");
    } else {
      setSearchTerm(tempSearchTerm);
    }
  };

  const searchImage = require("./Assets/ioupe.png");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Find your Book here..."
        ref={searchText}
        //  value={setResultTitle}
         onChangeText={setSearchTerm}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Image
          source={searchImage}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  image: {
    width: 24,
    height: 24,
  },
});
