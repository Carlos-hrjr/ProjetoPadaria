import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import axios from 'axios';


export default class Fornada extends Component{

    render(){
        return(
            <View style={styles.painel}>
                <Button color='#471C0A' title="Enviar Notificação" onPress={() => {
                    axios.post('https://apipadaria.herokuapp.com/api/fornada', {
                        data_inicio: new Date().toISOString().slice(0, 19).replace('T', ' '),
                        data_fim: new Date().toISOString().slice(0, 19).replace('T', ' '),
                        user_id: 62
                    })
                    .then(alert('Notificação enviada'))
                    
                }}/>
            </View>
            
        )
        
    }

} 
const styles = StyleSheet.create({
    painel: {
        flex: 1,
        padding: 20,
        backgroundColor: '#D4CA90',
        padding: 20
    },
    botao: {
        padding: 20
    }
})