import React, {Component} from 'react';
import {View, Text,TextInput, Button, StyleSheet, Switch} from 'react-native';

export default props => (
    <View style={styles.painel}>
        <Text style={{fontSize: 20}}>Descrição</Text>
        <TextInput></TextInput>
        <Text style={{fontSize: 20}}>Preço</Text>
        <TextInput/>
        <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 20}}>Padaria</Text>
            <Switch/>
        </View>
        <Button color="#471C0A" title="Cadastrar" onPress={() =>{
                        alert('Produto cadastrado com sucesso!');
                    }}></Button>
    </View>
)

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