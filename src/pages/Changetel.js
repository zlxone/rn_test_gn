import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');

export default class App extends Component {
    static navigationOptions = {
        title: '更换手机号',
      };
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor:'white',height: 100, paddingLeft: 16, backgroundColor: 'white', marginTop: 6, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#EAEAEA', borderBottomWidth: 1 }}>
                        <TextInput placeholder='请输入新的手机号码' keyboardType='numeric' style={{ flex:1, }}></TextInput>
                        <TouchableOpacity style={{ marginRight:16,marginLeft:16}}>
                            <Text style={{ color: '#B92424', fontSize: 18, width:'100%', }}>获取验证码</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput placeholder='请输入验证码' style={{ width: width * 0.9, }}></TextInput>
                </View>

                <View style={{ marginTop: 60, padding: 16, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 6, backgroundColor: '#B92424', height: 50 }}>
                        <Text style={{ fontSize: 20 }}>确定</Text>
                    </TouchableOpacity>
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

});
