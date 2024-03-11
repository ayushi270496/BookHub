import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'
import SearchForm from './SearchForm'


const Home = () => {
  return (
    <LinearGradient colors={['#C6FFDD', '#FBD786', '#f7797d']} style={styles.container}>
    <View >
      <Text style={styles.header}>Find your book of choice</Text>
      <SearchForm/>
    </View>
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  header:{
    padding:30,
    color:'black',
    fontSize:30,
    width:"100%"
    
  }
})