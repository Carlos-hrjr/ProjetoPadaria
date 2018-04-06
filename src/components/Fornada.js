import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default props => (
    <View style={styles.painel}>
        <Button color='#471C0A' title="Enviar Notificação" onPress={() => {
            alert('Notificação enviada');
        }}/>
    </View>
    
)

const styles = StyleSheet.create({
    painel: {
        flex: 1,
        padding: 20,
        backgroundColor: '#D4CA90'
    },
    botao: {
        padding: 20
    }
})