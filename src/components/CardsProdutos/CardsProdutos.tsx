import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

export const CardsProdutos = (props) => {
    
    const foto = `${props.produto.imagemProduto}`;
    
    return (
        <TouchableOpacity key={props.i}
            onPress={() => console.log(`Produto ${props.produto.nomeProduto} foi clicado`)}>
            <Card containerStyle={styles.card_recente}>
                <Card.Image
                    style={styles.card_image}
                    source={{ uri: foto }} />
                <Card.Divider />
                <Card.Title style={styles.card_recent_titulo}>{props.produto.nomeProduto}</Card.Title>
                <Text style={styles.card_recent_descricao}>{props.produto.descricaoProduto}</Text>
            </Card>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    card_recente: {
        width: 250,
        backgroundColor: '#156e5c',
        borderRadius: 10,
        borderWidth: 0,
        padding: 0,
        overflow: 'hidden',
    },
    card_image: {
        height: 200,
    },
    card_recent_titulo: {
        color: '#c1f5eb',
        fontSize: 26,
        textAlign: 'left',
        paddingHorizontal: 10,
        height: 60,
    },
    card_recent_descricao: {
        color: '#c1f5eb',
        fontSize: 16,
        textAlign: 'left',
        textAlignVertical: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
        height: 30,
    }
});