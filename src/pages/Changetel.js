import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import R,{ Network,ToastUtil } from '../public/R';
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');

export default class App extends Component {
    static navigationOptions = {
        title: '更换手机号',
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    _getCode() {
        if (1 == 1) {
            fetch('http://lightyear.lnkj6.com/index.php/Home/Public/send_sms_reg_code', {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "username=17621936608"
            })
                .then((response) => response.json())
                .then(({ info, data, status }) => {       // 获取到的数据处理
                    if (status == '1') {
                        alert("123789")
                        this.setState({ mydata0: data })
                        alert("123"+this.state.mydata0[0].code)
                    } else {
                        alert("12300"+this.state.mydata0[0].code)
                    }                    
                })
                .catch((error) => { // 错误处理
                })
                .done();
        } else {
            Alert.alert('', '您的资料不完善，请先完善资料', [{ text: 'OK', onPress: () => console.log('OK Pressed') },], { cancelable: false })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: 'white', height: 100, paddingLeft: 16, backgroundColor: 'white', marginTop: 6, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#EAEAEA', borderBottomWidth: 1 }}>
                        <TextInput placeholder='请输入新的手机号码' keyboardType='numeric' style={{ flex: 1, }}></TextInput>
                        <TouchableOpacity style={{ marginRight: 16, marginLeft: 16 }} onPress={() => { this._getCode() }}>
                            <Text style={{ color: '#B92424', fontSize: 18, width: '100%', }}>获取验证码</Text>
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
