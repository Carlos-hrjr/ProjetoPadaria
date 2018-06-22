import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

export default class PainelUsuario extends Component{

    constructor(props){
        super(props);
        this.state = {minutos: 0};
    }

    componentWillMount(){
        axios.get('https://apipadaria.herokuapp.com/api/lastfornada')
                    .then((response) => {
                        var minutos = parseInt(response.data.fornada.data_inicio.substring(14, 16)) 
                        - parseInt(new Date().toISOString().slice(0, 19).replace('T', ' ').substring(14, 16));
                        this.setState({minutos: minutos})})
                    .catch((erro) => console.log(erro))
    }

    render(){
        return(
            <View>
                <Text style={styles.text}>A ultima fornada foi posta há</Text>
                <Text style={styles.text}>{Math.abs(this.state.minutos)} minutos</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
    }
  })