import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert, StatusBar } from 'react-native';
import { Input, Text, Icon, Button } from 'react-native-elements';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import { Loading } from '../../components/Loading/Loading';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [visible, setVisible] = useState(false);
    const { login } = useContext(AutenticacaoContext);

    const handleLogin = async () => {
        console.log(`Email: ${email} - Senha: ${senha}`);

        setVisible(true);
        const respostaLogin = await login(email, senha);
        setVisible(false);
        if (!respostaLogin) {
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "OK" },
                    { text: "Não foi possível realizar o login." },
                ]
            );
        } else {
            navigation.navigate('Home');
        }
    }

    // navigation.navigate('Home');

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#156e5c' />
            <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input
                style={styles.input_entrada}
                placeholder='E-mail'
                onChangeText={setEmail}
                value={email}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                leftIcon={<Icon name='user' color='#156e5c' type='font-awesome' size={24} />}
            />
            <Input
                style={styles.input_entrada}
                secureTextEntry={true}
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                leftIcon={<Icon name='lock' color='#156e5c' type='foundation' size={24} />}
            />
            {visible ?
                <Loading />
                :
                <Button
                    title='Entrar'
                    onPress={() => handleLogin()}
                    titleStyle={styles.titulo_botao}
                    buttonStyle={styles.button}
                    containerStyle={styles.container_button}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7cccbc',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    texto_entrada: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#156e5c',
        padding: 50,
        textAlign: 'center'
    },
    input_entrada: {
        backgroundColor: '#c1f5eb',
        color: '#686db1',
        margin: 10,
        borderRadius: 10,
    },
    container_button: {
        paddingHorizontal: 100,
    },
    button: {
        backgroundColor: '#156e5c',
        borderRadius: 100,
    },
    titulo_botao: {
        fontStyle: 'italic',
    }
});

export default Login;