import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


export default class App extends Component {
  static navigationOptions = {
    title: '搜索',
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 19, height: 50, }}>搜索</Text>
        </View> */}
        <View style={{ flexDirection: 'row',marginTop:8, alignItems: 'center',backgroundColor:'white', marginLeft: 10, borderRadius: 8, height: 38, width: width - 20, borderColor: 'gray', borderWidth: 1, }}>
          <Image style={{ width: 20, height: 20, marginLeft: 8 }}
            source={require("../images/nav_but_icon_.png")}></Image>
          <TextInput
            placeholder='请输入搜索内容'
            style={{ height: 38, width: width - 70 }}
          ></TextInput>
        </View>
        <View style={{backgroundColor:'white',paddingBottom:30,marginTop:8}}>        
        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'Blod', }}>热门搜索</Text>
        </View>
        <View style={{ flexWrap: 'wrap', width: width - 20, marginLeft: 10, flexDirection: 'row' }}>
          <TouchableOpacity>
            <Text style={styles.rmtext}>派传单</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rmtext}>兼职模特</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rmtext}>派传单</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rmtext}>模特</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rmtext}>派传单</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rmtext}>兼职模特</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rmtext}>派传单</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.rmtext}>兼职模特</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#EAEAEA',
  },
  rmtext: {
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#FFF0F0F0',
    color: '#FF666666',
    padding: 8,
    paddingLeft: 14,
    paddingRight: 14,
  }
});
