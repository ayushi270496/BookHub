import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './SRC/Component/Home'
import { ApiProvider } from './SRC/Component/ApiContex';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApiProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApiProvider>
  );
}


export default App

const styles = StyleSheet.create({})