import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Modal, ScrollView} from 'react-native';
import {adicionaProduto} from '../actions/PedidoActions';
import {connect} from 'react-redux';

class Produto extends Component {

    render(){
        return(
            <ScrollView style={styles.container}>
                <TouchableHighlight onPress={() => {
                    this.props.adicionaProduto(this.props.produto);
                    this.props.fecharModal;
                }
                    
                }>
                    <View>
                        <Text>{this.props.produto.descricao}</Text>
                        <Text>{this.props.produto.preco}</Text>
                        <Text>{this.props.produto.peso}</Text>
                    </View>
                </TouchableHighlight>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        paddingRight: 200,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#999'
    }
})

export default connect(null, {adicionaProduto})(Produto);