import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component{

    constructor(props){
        super(props);

        this.state = {email: '', senha: ''};
    }

    verificaValores (){
        if(this.state.email === ''){
            alert('Digite o email');
            return false;
        }
        if(this.state.senha === ''){
            alert('Digite a senha');
            return false;
        }
        return true;
    }

    render(){
        return (
            <View style={styles.painel}>
                <View>
                    <Text style={{fontSize: 20,alignSelf: 'center'} }>Email</Text>
                    <TextInput value={this.state.email} onChangeText={valorDoCampo => {
                        this.setState({email: valorDoCampo});
                    }}></TextInput>
                </View>
                <View>
                    <Text style={{fontSize: 20, alignSelf: 'center'}}>Senha</Text>
                    <TextInput value={this.state.senha} onChangeText={valorDoCampo => {
                        this.setState({senha: valorDoCampo});
                    }}></TextInput>
                </View>
                <View style={styles.botao}>
                    <Button color="#471C0A" title="Login" onPress={() => {
                        if(this.verificaValores()){
                            Actions.painel();
                        }
                    }}></Button>
                </View>
                <View style={styles.botao}>
                    <Button color="#471C0A" title="Cadastre-se" onPress={() => {
                        Actions.cadastrarUsuario();
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