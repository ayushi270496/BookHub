import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//first_publish_year
const BookItem = ({item}) => {
  return (
    <View style={styles.main}>
      <View style ={styles.item}>
      <Text >{item.title}</Text>
      <Text style = {{color:"blue"}}>{item.author_name}</Text>
      <Text >{item.first_publish_year}</Text>
      </View>
    </View>
  )
}

export default BookItem

const styles = StyleSheet.create({
  main:{
   flex:1

  },
  item:{
    backgroundColor:"white",
    margin:10,
    padding:10,
    height:100,
    width:"80%",
    fontSize:40
  }
})