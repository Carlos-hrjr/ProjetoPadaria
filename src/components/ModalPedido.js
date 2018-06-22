import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Modal} from 'react-native';
import styles from "./app.style";
import axios from 'axios';
import Produto from './Produto';

export default class ModalPedido extends Component {

    constructor(props){
        super(props);

        this.state = {listaProdutos: []};
    }

    render(){
        return(
            <View style={styles.modalContent}> 
                {this.props.produtos.map((produto) => (
                <Produto key={produto.id} produto={produto} 
                fecharModal={this.props.fecharModal}></Produto>))}
            </View>
        )
    }

}


