import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SearchBar = ({query,setQuery,onSearch}) => {
  const searchIcon = require('./Assets/ioupe.png');
  return (
    <View style={styles.container}>
      <View style={styles.searchtab}>
        <TextInput placeholder="Search here" style={styles.inputTab}
        onChangeText={setQuery}
        value={query}
         />
        <TouchableOpacity onPress={onSearch}>
          <Image source={searchIcon} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchtab: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 30,
  },
  inputTab: {
    height: 50,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  image: {
    height: 25,
    width: 25,
    margin: 10,
  },
});
