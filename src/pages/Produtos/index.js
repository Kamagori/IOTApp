import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity, FlatList, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./style"
import { getFirestore, collection, getDocs } from 'firebase/firestore';



const Produtos = ({ navigation }) => {

    const [itensSelecionados, setItensSelecionados] = useState([]);

    const data = [
        { id: '1', nome: 'Coxinha', preco: 10, imagem: require('../../../assets/coxinha.jpg') },
        { id: '2', nome: 'Esfiha', preco: 20, imagem: require('../../../assets/esfiha.jpg') },
        { id: '3', nome: 'Kibe', preco: 15, imagem: require('../../../assets/kibe.jpg') },
      ];

      const adicionarItem = (item) => {
        const novoArray = [...itensSelecionados];
        const index = novoArray.findIndex((i) => i.id === item.id);
    
        if (index !== -1) {
          novoArray[index].quantidade++;
        } else {
          novoArray.push({ ...item, quantidade: 1 });
        }
    
        setItensSelecionados(novoArray);
      };

      const calcularTotal = () => {
        const total = itensSelecionados.reduce((acc, item) => {
            return acc + (item.preco * item.quantidade);
          }, 0);
          return total.toFixed(2);
      };

      const renderItem = ({ item }) => {
        const itemSelecionado = itensSelecionados.find((it) => it.id === item.id);
        const quantidadeSelecionada = itemSelecionado ? itemSelecionado.quantidade : 0;

        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <TouchableOpacity onPress={() => adicionarItem(item)}>
          <Image source={item.imagem} style={{ width: 100, height: 150, marginRight: 10 }} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 18, color: 'orange' }}>{item.nome}</Text>
          <Text style={{ fontSize: 16, color: 'green' }}>{`$${item.preco}`}</Text>
          <Text style={{ fontSize: 16, color: 'blue' }}>{`Quantidade: ${quantidadeSelecionada}`}</Text>
        </View>
          </View>
        );
      };

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, color: 'white' }}>Total: ${calcularTotal()}</Text>
          </View>
          <View style={{ marginTop: 20 }}>
          <TouchableOpacity
        style={{
          backgroundColor: 'red', // Cor de fundo do botão
          paddingVertical: 15, // Aumentando o espaçamento vertical
          paddingHorizontal: 40, // Aumentando o espaçamento horizontal
          padding: 10, // Espaçamento interno
          borderRadius: 10, // Borda arredondada
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: 'white', fontSize: 32 }}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'green', // Cor de fundo do botão
          paddingVertical: 15, // Aumentando o espaçamento vertical
          paddingHorizontal: 40, // Aumentando o espaçamento horizontal
          padding: 10, // Espaçamento interno
          borderRadius: 10, // Borda arredondada
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Caixa',  { total: calcularTotal() })}
      >
        <Text style={{ color: 'white', fontSize: 32 }}>Finalizar Pedido</Text>
      </TouchableOpacity>
         </View>
        </View>
      );
};

export default Produtos;
