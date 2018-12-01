import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');

export default class App extends Component {
  static navigationOptions = {
    title: '接单大厅',
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.jdcell}>
            <Image source={require('../images/jd1.png')} style={{ width: 110, height: 110 }}></Image>
            <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
              <Text style={{  fontSize: 16, marginBottom: 6, color: '#222224' }}>招网拍模特 工资日结</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>礼仪/模特</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：10人</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ color: '#B92424', fontSize: 18, fontWeight: 'bold' }}>200/天</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('OrderDetail')}
                  style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 2 }}>
                  <Text style={{ color: '#222224', fontWeight: 'bold' }}>立即报名</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.jdcell}>
            <Image source={require('../images/jd1.png')} style={{ width: 110, height: 110 }}></Image>
            <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
              <Text style={{  fontSize: 16, marginBottom: 6, color: '#222224' }}>招网拍模特 工资日结</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>礼仪/模特</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：10人</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ color: '#B92424', fontWeight: 'bold', fontSize: 18 }}>200/天</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('OrderDetail')}
                  style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 2 }}>
                  <Text style={{ color: '#222224', fontWeight: 'bold' }}>立即报名</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.jdcell}>
            <Image source={require('../images/jd1.png')} style={{ width: 110, height: 110 }}></Image>
            <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
              <Text style={{ fontSize: 16, marginBottom: 6, color: '#222224' }}>招网拍模特 工资日结</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>礼仪/模特</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：10人</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ color: '#B92424', fontWeight: 'bold', fontSize: 18 }}>200/天</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('OrderDetail')}
                  style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 2 }}>
                  <Text style={{ color: '#222224', fontWeight: 'bold' }}>立即报名</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.jdcell}>
            <Image source={require('../images/jd1.png')} style={{ width: 110, height: 110 }}></Image>
            <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
              <Text style={{  fontSize: 16, marginBottom: 6, color: '#222224' }}>招网拍模特 工资日结</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>礼仪/模特</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：10人</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ color: '#B92424', fontWeight: 'bold', fontSize: 18 }}>200/天</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('OrderDetail')}
                  style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 2 }}>
                  <Text style={{ color: '#222224', fontWeight: 'bold' }}>立即报名</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.jdcell}>
            <Image source={require('../images/jd1.png')} style={{ width: 110, height: 110 }}></Image>
            <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
              <Text style={{  fontSize: 16, marginBottom: 6, color: '#222224' }}>招网拍模特 工资日结</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>礼仪/模特</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：10人</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ color: '#B92424', fontWeight: 'bold', fontSize: 18 }}>200/天</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('OrderDetail')}
                  style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 2 }}>
                  <Text style={{ color: '#222224', fontWeight: 'bold' }}>立即报名</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.jdcell}>
            <Image source={require('../images/jd1.png')} style={{ width: 110, height: 110 }}></Image>
            <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
              <Text style={{  fontSize: 16, marginBottom: 6, color: '#222224' }}>招网拍模特 工资日结</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>礼仪/模特</Text>
              <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：10人</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ color: '#B92424', fontWeight: 'bold', fontSize: 18 }}>200/天</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('OrderDetail')}
                  style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 2 }}>
                  <Text style={{ color: '#222224', fontWeight: 'bold' }}>立即报名</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    // paddingTop: 10,
  },
  jdcell: {
    height: 142,
    width: width,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});
