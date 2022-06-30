import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Screen } from 'react-native-screens';

const Carrinho = () => {
    return (
        <Screen style={styles.container}>
            <Text style={styles.texto}>{'Carrinho'}</Text>
        </Screen>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7cccbc',
        padding:16,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    texto:{
        fontWeight: 'bold',
        fontSize:30,
        color: '#156e5c',
        padding:50,
        textAlign: 'center'
    },
})

export default Carrinho;