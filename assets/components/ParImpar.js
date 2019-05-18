import React from 'react';
import { View, Text } from 'react-native';
import Padrao from '../styles/Padrao';

function parOuImpar(numero) {
    const tipo = numero % 2 == 0 ? 'par' : 'ímpar';
    return <Text style={Padrao.ex}>{tipo}</Text>
}

export default (props) => 
    <View>
        { parOuImpar(props.numero) }
    </View>


