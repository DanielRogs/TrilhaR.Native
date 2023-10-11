import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from '@expo-google-fonts'


// import { Container } from './styles';

const Desafio1 = () => {
  
    let [fontsLoaded] = useFonts({
        'Nome-da-Fonte': require('./caminho-para-o-arquivo-da-fonte.ttf'), // Para projetos React Native puros
      });
    
      if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
      }

    return (
        <LinearGradient
            colors={['#3BC90C', '#1F7300']}
            style={{ flex: 1 }}
        >

        <View>
            
        </View>
            

        </LinearGradient>
    );
}

const style = StyleSheet.create({
})

export default Desafio1;