/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {Router, Scene} from 'react-native-router-flux';
import Painel from './src/components/Painel';
import CadastrarPadeiro from './src/components/CadastrarPadeiro';
import Login from './src/components/Login';
import CadastrarUsuario from './src/components/CadastroUsuario';
import Fornada from './src/components/Fornada';
import Promocao from './src/components/Promocao';
import CadastrarProduto from './src/components/CadastrarProduto';
import AdicionarProdutoPadaria from './src/components/AdicionarProdutoPadaria';
import TelaUsuario from './src/components/TelaUsuario';
import ModalTester from './src/components/teste';
import reducers from './src/reducers/index';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
      <View style={styles.container}>
        <Router sceneStyle={{paddingTop: 55, backgroundColor: '#471C0A'}}>
          <Scene key='login' component={Login} initil title='Login'/>
          <Scene key='painel' component={Painel} title='Painel de Controle'/>
          <Scene key='cadastrarPadeiro' component={CadastrarPadeiro} title='Cadastrar Padeiro'/>
          <Scene key='cadastrarUsuario' component={CadastrarUsuario} title='Sign In'/>
          <Scene key='fornada' component={Fornada} title='Cadastrar Fornada'/>
          <Scene key='promocao' component={Promocao} title='Cadastrar Promoção' />
          <Scene key='produto' component={CadastrarProduto} title='Cadastrar Produto' />
          <Scene key='usuario' component={TelaUsuario} title='Padaria'/>
          <Scene key='teste' component={ModalTester} title='teste'/>
        </Router>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#471C0A'
  }
});
