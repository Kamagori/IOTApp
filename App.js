import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Caixa from './src/pages/Caixa';
import NewCaixa from './src/pages/NewCaixa';
import database from "./src/config/firebaseconfig";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Caixa Vendinha'>
        <Stack.Screen
          name = "Caixa Vendinha"
          component={Caixa}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
        <Stack.Screen
          name = "Produtos Vendinha"
          component={NewCaixa}
          options={{
            headerTintColor: "#f92e6a"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

