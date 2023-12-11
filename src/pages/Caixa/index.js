import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Platform, Share, MediaLibrary } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
// import RNFS from 'react-native-fs';

import styles from "./style"

const Caixa = ({ route }) => {
    const { total } = route.params;
    const [valorTotal, setValorTotal] = useState(0);
    const [troco, setTroco] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        // Array com os valores das cédulas
        const cedulas = [100,20,5];
    
        // Função para calcular o total das cédulas
        const calcularTotalCedulas = () => {
          let valorCedulas = 0;
    
          cedulas.forEach(cedula => {
            const quantidadeCedulas = Math.floor(total / cedula);
            valorCedulas += quantidadeCedulas * cedula;
          });
    
          setValorTotal(valorCedulas);
          setTroco(valorCedulas - total);
        };
    
        calcularTotalCedulas();
      }, [total]);
  
      const finalizarProcesso = async () => {
        const conteudoNotaFiscal = `Nota Fiscal\nTotal: $${total}\nValor das Cédulas: $${valorTotal}\nTroco: $${troco}`;
    
        // try {
        //     const fileUri = `${FileSystem.cacheDirectory}nota_fiscal.txt`;
        //     await FileSystem.writeAsStringAsync(fileUri, conteudoNotaFiscal);

        //     if (Platform.OS === 'android') {
        //         const downloadDest = `${RNFS.DownloadDirectoryPath}/nota_fiscal.txt`;
        //         await RNFS.moveFile(fileUri, downloadDest);
        //       }
          
        //   // Navegar de volta para o menu após criar o arquivo
        //   navigation.navigate('Menu');
        // } catch (error) {
        //   console.error('Erro ao criar a nota fiscal:', error);
        // }
        navigation.navigate('Menu');
      };
      
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text style={{ fontSize: 24, color: 'white' }}>Total a ser Pago:</Text>
        <Text style={{ fontSize: 36, color: 'white' }}>${total}</Text>
        <Text style={{ fontSize: 24, color: 'white', marginTop: 20 }}>Valor lido das Notas:</Text>
        <Text style={{ fontSize: 36, color: 'white' }}>${valorTotal}</Text>
        <Text style={{ fontSize: 24, color: 'white', marginTop: 20 }}>Troco:</Text>
        <Text style={{ fontSize: 36, color: 'white' }}>${troco}</Text>
        <TouchableOpacity
        style={{
          flexDirection: 'row',  
          backgroundColor: 'red', // Cor de fundo do botão
          paddingVertical: 15, // Aumentando o espaçamento vertical
          paddingHorizontal: 105, // Aumentando o espaçamento horizontal
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
        onPress={finalizarProcesso}
      >
        <Text style={{ color: 'white', fontSize: 32 }}>Finalizar Compra</Text>
      </TouchableOpacity>
      </View>
    );
  };
  
  export default Caixa;