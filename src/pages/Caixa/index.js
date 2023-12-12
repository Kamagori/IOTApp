import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Platform, Share, MediaLibrary } from "react-native";
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import Produtos from '../../pages/Produtos/index'
// import RNFS from 'react-native-fs';

import styles from "./style"

const Caixa = ({ route }) => {
    const { total } = route.params;
    const [valorLido, setValorLido] = useState(0);
    const [troco, setTroco] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
      const lerArquivoTexto = async () => {
        try {
          // Substitua 'SEU_BUCKET' e 'SEU_CAMINHO/arquivo.txt' pelos seus dados reais
          const bucket = 'iot_tp_app';
          const filePath = 'gs://iot_tp_app/dados.txt';
          const response = await fetch(`https://storage.googleapis.com/${bucket}/${filePath}`);
          const text = await response.text();
  
          // Extrair os números do texto e calcular a soma
          const numbers = text.match(/\d+/g); // Regex para encontrar números no texto
          const soma = numbers ? numbers.reduce((acc, curr) => acc + parseInt(curr, 10), 0) : 0;
          setValorLido(soma);
        } catch (error) {
          console.error('Erro ao ler o arquivo de texto:', error);
        }

        setTroco(valorLido - total);
      };
  
      lerArquivoTexto();
    }, []);
  
      const finalizarProcesso = async () => {
        //const conteudoNotaFiscal = `Nota Fiscal\nTotal: $${total}\nValor das Cédulas: $${valorTotal}\nTroco: $${troco}`;
    
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
        <Text style={{ fontSize: 36, color: 'white' }}>${valorLido}</Text>
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