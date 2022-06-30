import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Screen } from 'react-native-screens';
import AxiosInstance from '../../api/AxiosInstance';
import { CardsProdutos } from '../../components/CardsProdutos/CardsProdutos';
import { Loading } from '../../components/Loading/Loading';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { CategoriaContext } from '../../context/CategoriaContext';
import { ProdutoType } from '../../models/ProdutoType';

const CategoriaDetalhes = ({navigation}) => {

    const { usuario } = useContext(AutenticacaoContext);
    const [produto, setProduto] = useState<ProdutoType[]>([]);
    const [visible, setVisible] = useState(true);
    const { nomeCategoria } = useContext(CategoriaContext);

    useEffect(() => {
        getDadosProduto();
    }, []);

    const getDadosProduto = async () => {
        AxiosInstance.get(
            `/produto`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            console.log('Dados dos produtos: ' + JSON.stringify(result.data));
            setProduto(result.data);
            setVisible(false);
        }).catch((error) => {
            console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
        });
    }

    return (
        <Screen style={styles.container}>
            <View style={styles.navbar}>
                <Button onPress={() => navigation.navigate('TabNavigationScreen')}
                    color='#156e5c'
                    title='Voltar'/>
            </View>
                <Text style={styles.texto}>{`${nomeCategoria}`}</Text>
            {visible ?
                <Loading />
                :
                <View style={styles.container_externo}>

                    <FlatList
                        data={produto}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        style={styles.scroll_cards}
                        keyExtractor={item => item.idProduto}
                        renderItem={response =>
                            <CardsProdutos
                                produto={response.item}
                            />}
                    />
                </View>
            }
        </Screen>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        backgroundColor: '#156e5c',
        margin: -16,
        marginBottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    botao: {
        borderWidth: 0,
        width: '50',
    },
    container_externo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#7cccbc',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#156e5c',
        padding: 20,
        textAlign: 'center'
    },
    scroll_cards: {
        flexGrow: 0,
    },
})

export default CategoriaDetalhes;