import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect, useContext } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Card, Input, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import AxiosInstance from '../../api/AxiosInstance';
import { CardsCategoria } from '../../components/CardsCategoria/CardsCategoria';
import { CardsProdutos } from '../../components/CardsProdutos/CardsProdutos';
import { Loading } from '../../components/Loading/Loading';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { CategoriaType } from '../../models/CategoriaType';
import { ProdutoType } from '../../models/ProdutoType';

const Home = ({ navigation }) => {

    const { usuario } = useContext(AutenticacaoContext);
    console.log('Usuario: ' + JSON.stringify(usuario));
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);
    const [produto, setProduto] = useState<ProdutoType[]>([]);
    const [visibleCategoria, setVisibleCategoria] = useState(true);
    const [visibleProduto, setVisibleProduto] = useState(true);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        getDadosCategoria();
    }, []);

    useEffect(() => {
        getDadosProduto();
    }, []);

    useEffect(() => {
        buscarCategoria(busca);
    }, [busca])

    const getDadosCategoria = async () => {
        AxiosInstance.get(
            `/categoria`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            console.log('Dados das categorias: ' + JSON.stringify(result.data));
            setCategoria(result.data);
            setVisibleCategoria(false);
        }).catch((error) => {
            console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));
        });
    }
    const getDadosProduto = async () => {
        AxiosInstance.get(
            `/produto`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            console.log('Dados dos produtos: ' + JSON.stringify(result.data));
            setProduto(result.data);
            setVisibleProduto(false);
        }).catch((error) => {
            console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
        });
    }

    const buscarCategoria = (busca: string) => {
        if (busca !== '') {
            setCategoria(
                categoria.filter
                    (res => res.nomeCategoria.toLowerCase().includes(busca.toLowerCase())));
        } else {
            getDadosCategoria();
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Input
                placeholder="Encontre uma categoria"
                onChangeText={setBusca}
                inputContainerStyle={styles.input_entrada}
                value={busca}
                leftIcon={
                    <Icon
                        name="search"
                        color="#156e5c"
                        type="font-awesome"
                        size={20}
                    />
                }
                rightIcon={
                    <Icon
                        name="filter"
                        color="#156e5c"
                        type="font-awesome"
                        size={20}
                    />
                }
                placeholderTextColor={'#156e5c'}
            />


            {visibleCategoria ?
                <Loading />
                :
                <FlatList
                    data={categoria}
                    horizontal={true}
                    initialNumToRender={1}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll_cards}
                    keyExtractor={item => item.idCategoria}
                    renderItem={response =>
                        <CardsCategoria
                            categoria={response.item}
                            navigation={navigation}
                        />}
                />
            }

            <Text style={styles.texto_subtitulo}>{'Recentes'}</Text>
            {visibleProduto ?
                <Loading />
                :
                <FlatList
                    data={produto}
                    horizontal={true}
                    initialNumToRender={3}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll_cards}
                    keyExtractor={item => item.idProduto}
                    renderItem={response =>
                        <CardsProdutos
                            produto={response.item}
                            navigation={navigation}
                        />}
                />
            }

            <Text style={styles.texto_subtitulo}>{'Destaques'}</Text>
            <TouchableOpacity
                onPress={() => console.log('Destaque foi clicado')}>
                <Card containerStyle={styles.card_destaque}>
                    <Card.Image style={styles.card_destaque_image} source={require('../../assets/salada.jpg')} />
                    <Card.Divider />
                    <Card.Title style={styles.card_destaque_titulo}>Salada Grega à La Niçoise</Card.Title>
                    <Text style={styles.card_destaque_descricao}>Cara, Comida Saudável, Almoço, Brunch</Text>
                </Card>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7cccbc',
    },
    scroll_cards: {
        flexGrow: 0,
    },
    input_entrada: {
        backgroundColor: '#c1f5eb',
        color: '#156e5c',
        paddingHorizontal: 10,
        marginTop: 20,
        borderRadius: 10,
        borderBottomWidth: 0,
    },
    texto_subtitulo: {
        paddingHorizontal: 15,
        paddingTop: 15,
        fontWeight: 'bold',
        fontSize: 24,
        color: '#156e5c',
        textAlign: 'left'
    },
    botao_categoria: {
        alignItems: 'center',
        padding: 10,
    },
    card_destaque: {
        margin: 10,
        marginBottom: 20,
        padding: 0,
        backgroundColor: '#156e5c',
        borderWidth: 0,
        borderRadius: 10,
        overflow: 'hidden',
    },
    card_destaque_image: {
        height: 200,
    },
    card_destaque_titulo: {
        color: '#c1f5eb',
        fontSize: 16,
        textAlign: 'left',
        textAlignVertical: 'center',
        paddingHorizontal: 10,
    },
    card_destaque_descricao: {
        color: '#c1f5eb',
        fontSize: 12,
        textAlign: 'left',
        textAlignVertical: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
});

export default Home;