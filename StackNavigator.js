// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/pages/Menu/index';
import Produtos from './src/pages/Produtos/index';
import Caixa from './src/pages/Caixa/index'

const Stack = createStackNavigator();

const MeuStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="Caixa" component={Caixa} />
      {/* Outras telas da stack, se houver */}
    </Stack.Navigator>
  );
};
export default MeuStackNavigator;