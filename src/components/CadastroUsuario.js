import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class CadastroUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {nome: '', email: '', senha: ''};
    }

    verificaValores(){
        if(this.state.nome === ''){
            alert('Digite o nome');
            return false;
        }
        if(this.state.email === ''){
            alert('Digite o email');
            return false;
        }
        if(this.state.senha.length < 6){
            alert('A senha deve ter no mínimo 6 dígitos');
            return false;
        }
        alert('Usuário cadastrado com sucesso!');
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
                    <TextInput value={this.state.senha} onChangeText={valorDoCampo => {
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
        flexDirection: 'column'
    },
    botao: {
        padding: 20
    }
})