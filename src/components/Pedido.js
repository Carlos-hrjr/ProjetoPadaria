import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';
import ModalPedido from './ModalPedido';
import Modal from 'react-native-modal';
import axios from 'axios';

var screen = Dimensions.get('window');
export default class Pedido extends Component {

    constructor(props){
        super(props)
        this.state = {showModal: false, listaProdutos: []};
        this.fecharModal = this.fecharModal.bind(this);
    }
    componentWillMount(){
        axios.get('https://apipadaria.herokuapp.com/api/produto')
                    .then((response) => this.setState({listaProdutos: response.data.data}))
                    .then( (response) =>  {console.log(response)})
                    .catch(() => alert("erro de comunicação com o servidor"))
    }

    fecharModal(e){
        e.preventDefault();
        this.setState({showModal: !this.state.showModal});
    }

    render(){

        return (
            <View>
                <TouchableHighlight onPress={() => {
                     this.setState({showModal: !this.state.showModal});
                     console.log(this.state.listaProdutos)
            }}>
                     <Text style={styles.text}>Adicionar produto</Text>
                </TouchableHighlight>

                <Modal isVisible={this.state.showModal}
                onBackdropPress={() => this.setState({ showModal: !this.state.showModal })}>
                    <ModalPedido produtos={this.state.listaProdutos} fecharModal={this.fecharModal}></ModalPedido>
                </Modal>

            </View>
        )
    }
}
    
    

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      paddingTop: 20
    }
  })