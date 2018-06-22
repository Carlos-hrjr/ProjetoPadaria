import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export default class CadastroUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {nome: '', email: '', senha: ''};
    }

    verificaValores(){
        let temErro = false;
        if(this.state.nome === ''){
            alert('Digite o nome');
            temErro = true;
            return false;
        }
        if(this.state.email === ''){
            alert('Digite o email');
            temErro = true;
            return false;
        }
        if(this.state.senha.length < 6){
            alert('A senha deve ter no mínimo 6 dígitos');
            temErro = true;
            return false;
        }
        if(!temErro){
            axios.post('https://apipadaria.herokuapp.com/api/user', 
            {
                name: this.state.nome,
                email: this.state.email,
                password: this.state.senha,
                perfil_id: 2
            }
        )
                .then(() => alert('Usuário cadastrado com sucesso!'))
                .catch(() => alert('Erro de conexão com o servidor'));
        }
        return true;
    }

    render(){
        return (
            <View style={styles.painel}>
                <View>
                    <Text style={{fontSize: 20}}>Nome</Text>
                    <TextInput value={this.state.nome} onChangeText={valorDoCampo => {
                        this.setState({nome: valorDoCampo});
                    }}></TextInput>
                </View>
                <View>
                    <Text style={{fontSize: 20}}>Email</Text>
                    <TextInput value={this.state.email} onChangeText={valorDoCampo => {
                        this.setState({email: valorDoCampo});
                    }}></TextInput>
                </View>
                <View>
                    <Text style={{fontSize: 20}}>Senha</Text>
                    <TextInput secureTextEntry value={this.state.senha} onChangeText={valorDoCampo => {
                        this.setState({senha: valorDoCampo});
                    }}></TextInput>
                </View>
                <View style={styles.botao}>
                    <Button color="#471C0A" title="Cadastrar" onPress={() =>{
                        if(this.verificaValores()){
                            Actions.login();
                        }
                    }}></Button>
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    painel: {
        flex: 1,
        margin: 20,
        backgroundColor: '#D4CA90',
        flexDirection: 'column',
        padding: 20
    },
    botao: {
        padding: 20
    }
})