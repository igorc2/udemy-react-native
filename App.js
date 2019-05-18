import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ParImpar from './assets/components/ParImpar';
import Simples from './assets/components/Simples';
import { Inverter, MegaSena } from './assets/components/Multi'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="flexível"/>
        <Text style={styles.mainText}>Igor C2</Text>
        <ParImpar numero='3' />
        <Inverter texto="Igor" />
        <MegaSena numeros='7' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 40
  }
});
