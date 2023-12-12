import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MeuStackNavigator from './StackNavigator';
import Menu from './src/pages/Menu/index';

const App = () => {
  return (
    <NavigationContainer>
      <MeuStackNavigator />
    </NavigationContainer>
  );
};

export default App;

