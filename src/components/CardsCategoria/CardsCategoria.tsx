import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CategoriaContext } from '../../context/CategoriaContext';

export const CardsCategoria = (props) => {
    
    const { handleCategoria } = useContext(CategoriaContext)

    const handleClick = () => {
        handleCategoria(props.categoria)
        props.navigation.navigate('CategoriaDetalhes')
    }

    return (
        <TouchableOpacity 
            onPress={handleClick}>
            <View style={styles.view_itens_categoria}>
                <Text style={styles.texto_nome_categoria}>{props.categoria.nomeCategoria}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    scroll_categorias: {
        flexGrow: 0,
    },
    view_itens_categoria: {
        width: 120,
        height: 120,
        backgroundColor: '#156e5c',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
    },
    texto_nome_categoria: {
        color: '#c1f5eb',
        textAlign: 'center',
    },
});