import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from "./style"

const SuaTela = () => {
  useEffect(() => {
    const setVerticalOrientation = () => {
      if (Dimensions.get('window').height > Dimensions.get('window').width) {
        // Verifica se a altura é maior que a largura (modo retrato)
        StatusBar.setHidden(true); // Oculta a barra de status (opcional)
      } else {
        StatusBar.setHidden(false); // Exibe a barra de status (opcional)
      }
    };

    setVerticalOrientation();

    Dimensions.addEventListener('change', setVerticalOrientation); // Atualiza ao girar a tela

    return () => {
      Dimensions.removeEventListener('change', setVerticalOrientation); // Remove o listener ao desmontar a tela
    };
  }, []);

};

const Menu = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue', // Cor de fundo do botão
          paddingVertical: 15, // Aumentando o espaçamento vertical
          paddingHorizontal: 40, // Aumentando o espaçamento horizontal
          padding: 10, // Espaçamento interno
          borderRadius: 10, // Borda arredondada
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={{ color: 'white', fontSize: 32 }}>Começar a Comprar</Text>
      </TouchableOpacity>
    </View>
    );
};
export default Menu;