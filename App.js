// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/LoginScreen';
import { render } from 'react-dom';


const Stack = createStackNavigator();



function App() {

  return (

    <Stack.Screen name="Home" component={HomeScreen} />

  )
}

export default App;