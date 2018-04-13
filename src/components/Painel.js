import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default props => (
    <View style={styles.painel}>
        <View style={styles.botao}>
            <Button color='#471C0A' title="Cadastrar Padeiro" onPress={() => {
                Actions.cadastrarPadeiro();
            }}/>
        </View>
        <View style={styles.botao}>
            <Button color='#471C0A' title="Cadastrar Fornada" onPress={() => {
                Actions.fornada();
            }}/>
        </View>
        <View style={styles.botao}>
            <Button color='#471C0A' title="Cadastrar Produto" onPress={() => {
                Actions.produto();
            }}/>
        </View>
        <View style={styles.botao}>
            <Button color='#471C0A' title="Cadastrar Promoção" onPress={() =>{
                Actions.promocao();
            }}/>
        </View>
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
        padding: 20
    }
})