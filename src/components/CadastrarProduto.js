import React, {Component} from 'react';
import {View, Text,TextInput, Button, StyleSheet, Switch} from 'react-native';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';

export default class CadastrarProduto extends Component {

    formataData(data){
        var retorno = null;
        if(data != null)
            retorno = data.substring(6, 10) + "-" + data.substring(3, 5) + "-" + data.substring(0, 2) + " 00:00:00";
        return retorno;
    }

    constructor(props){
        super(props);

        this.state = {descricao: "", preco: "", data_fabricacao: null, data_validade: null}
    }

    render(){
        return (
            <View style={styles.painel}>
                <Text style={{fontSize: 20}}>Descrição</Text>
                <TextInput value={this.state.descricao} onChangeText={valorDoCampo => {
                        this.setState({descricao: valorDoCampo});
                    }}></TextInput>
                <Text style={{fontSize: 20}}>Preço</Text>
                <TextInput value={this.state.preco} onChangeText={valorDoCampo => {
                        this.setState({preco: valorDoCampo});
                    }}/>
                <Text style={{fontSize: 20}}>Data de Fabricação</Text>
                <DatePicker format="DD/MM/YYYY" date={this.state.data_fabricacao} onDateChange={(date) => this.setState({data_fabricacao: date})}/>

                <Text style={{fontSize: 20}}>Data de Validade</Text>
                <DatePicker format="DD/MM/YYYY" date={this.state.data_validade} 
                    onDateChange={(date) => this.setState({data_validade: date})}/>
                <Button color="#471C0A" title="Cadastrar" onPress={() =>{
                                var data_fabricacao = this.formataData(this.state.data_fabricacao);
                                var data_validade = this.formataData(this.state.data_validade);
                                axios.post('https://apipadaria.herokuapp.com/api/produto', 
                                {
                                    descricao: this.state.descricao,
                                    preco : parseFloat(this.state.preco),
                                    quantidade: null,
                                    user_id: 62,
                                    data_validade: data_validade,
                                    data_fabricacao: data_fabricacao,
                                    peso: null,
                                    created_at: null,
                                    updated_at: null,
                                    tipo_id: 2
                                })
                                    .then(() =>{ alert('Produto cadastrado com sucesso!')
                                    this.setState({descricao: null, preco: null, data_fabricacao: null, data_validade: null})
                                })
                                    .catch(() => alert("Erro ao comunicar ao servidor"));
                            }}></Button>
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
        margin: 20
    }
})