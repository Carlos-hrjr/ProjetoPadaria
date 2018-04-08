import React, {Component} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default class Promocao extends Component {

    render(){
        return (
            <View style={styles.painel}>
                <Text>Produto</Text>
                <TextInput />

                <Text>Preço Antigo</Text>
                <TextInput/>

                <Text>Preço Novo</Text>
                <TextInput />

                <Text>Data Inicio</Text>
                <TextInput/>

                <Text>Data Fim</Text>
                <TextInput/>

                <View style={styles.botao}>
                    <Button color="#471C0A" title="Cadastrar" ></Button>
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