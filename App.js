import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigator/Navigator2'

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}></View>
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
