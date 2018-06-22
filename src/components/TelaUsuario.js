import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';
import {Actions} from 'react-native-router-flux';
import Pedido from './Pedido';
import PainelUsuario from './PainelUsuario';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4CA90',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D4CA90',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class TelaUsuario extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <PainelUsuario/>
        </View>
        <View style={styles.slide2}>
          <Pedido/>
        </View>
        
      </Swiper>
    );
  }
}