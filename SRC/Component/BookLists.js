import React, { useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import ApiContext from './ApiContext';


//https://covers.openlibrary.org/b/id/240727-S.jpg
const BookLists = () => { 
  const { books, loading, resultTitle } = useContext(ApiContext);
   const booksWithCovers = books.map((singleBook)=>{
    return{
        ...singleBook,
        id:(singleBook.id).replce("/works",""),
        cover_img :singleBook.cover_id? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-l.jpg`:cover_img  
    }
   })
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text style={{fontSize:20}}>{resultTitle}</Text>
    </View>
  );
};

export default BookLists;