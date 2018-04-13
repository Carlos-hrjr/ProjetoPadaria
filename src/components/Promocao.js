import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class Promocao extends Component {

    render(){
        return (
            <View style={styles.painel}>
                <Text style={{fontSize: 20}}>Produto</Text>
                <TextInput />

                <Text style={{fontSize: 20}} >Preço Antigo</Text>
                <TextInput/>

                <Text style={{fontSize: 20}}>Preço Novo</Text>
                <TextInput />

                <Text style={{fontSize: 20}}>Data Inicio</Text>
                <DatePicker format="DD/MM/YYYY"/>

                <Text style={{fontSize: 20}}>Data Fim</Text>
                <DatePicker format="DD/MM/YYYY"/>

                <View style={styles.botao}>
                    <Button color="#471C0A" title="Cadastrar" onPress={() =>{
                        alert('Produto cadastrado com sucesso!');
                    }}></Button>
                </View>
            </View>
        );
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