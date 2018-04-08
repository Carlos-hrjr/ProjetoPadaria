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

import {Router, Scene} from 'react-native-router-flux';
import Painel from './src/components/Painel';
import CadastrarPadeiro from './src/components/CadastrarPadeiro';
import Login from './src/components/Login';
import CadastrarUsuario from './src/components/CadastroUsuario';
import Fornada from './src/components/Fornada';
import Promocao from './src/components/Promocao';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Router sceneStyle={{paddingTop: 55, backgroundColor: '#471C0A'}}>
          <Scene key='login' component={Login} initil title='Login'/>
          <Scene key='painel' component={Painel} title='Painel de Controle'/>
          <Scene key='cadastrarPadeiro' component={CadastrarPadeiro} title='Cadastrar Padeiro'/>
          <Scene key='cadastrarUsuario' component={CadastrarUsuario} title='Sign In'/>
          <Scene key='fornada' component={Fornada} title='Cadastrar Fornada'/>
          <Scene key='promocao' component={Promocao} title='Cadastrar Promoção' />
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#471C0A'
  }
});
