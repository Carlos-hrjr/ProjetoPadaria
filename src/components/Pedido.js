import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Dimensions, FlatList, Button} from 'react-native';
import ModalPedido from './ModalPedido';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import axios from 'axios';
import {adicionaProduto} from '../actions/PedidoActions';

var screen = Dimensions.get('window');
class Pedido extends Component {

    constructor(props){
        super(props)
        this.state = {showModal: false, listaProdutos: [], ultimoPedido: null};
        this.fecharModal = this.fecharModal.bind(this);
    }
    componentWillMount(){
        axios.get('https://apipadaria.herokuapp.com/api/produto')
                    .then((response) => this.setState({listaProdutos: response.data.data}))
                    .catch(() => alert("erro de comunicação com o servidor"))
    }

    fecharModal(e){
        e.preventDefault();
        this.setState({showModal: !this.state.showModal});
    }

    enviarPedido(){
        axios.post('https://apipadaria.herokuapp.com/api/pedido', {user_id: 62})
    }

    enviarPedidoProduto(){
        
        axios.get('https://apipadaria.herokuapp.com/api/lastpedido')
            .then((response) => this.setState({ultimoPedido: response.data.pedido.id}))
            .then(() => this.props.produtos.map((produto) => {
                console.log(this.state.ultimoPedido);
                console.log(produto.id);
                axios.post('https://apipadaria.herokuapp.com/api/produto_pedido',
                {
                    pedido_id: this.state.ultimoPedido,
                    produto_id: produto.id,
                    quantidade: 1,
                    preco_unidade: parseFloat(produto.preco),
                    preco_total: parseFloat(produto.preco)
                })
            }))
        }
    render(){

        return (
            <View>
                <TouchableHighlight onPress={() => {
                     this.setState({showModal: !this.state.showModal});
            }}>
                     <Text style={styles.text}>Adicionar produto</Text>
                </TouchableHighlight>
                
                <Modal isVisible={this.state.showModal}
                onBackdropPress={() => {this.setState({ showModal: !this.state.showModal });
                    
                }}>
                    <ModalPedido produtos={this.state.listaProdutos} fecharModal={this.fecharModal}></ModalPedido>
                </Modal>
                <Button color="#471C0A"title="Fazer Pedido" onPress={() =>{
                    this.enviarPedido();
                    this.enviarPedidoProduto();
                }}></Button>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        produtos: state.PedidoReducers.produtos
    }
)

    

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      paddingTop: 20,
      paddingBottom: 400
    }, 
    textProduto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20
    }
  })

  export default connect(mapStateToProps, {adicionaProduto})(Pedido);