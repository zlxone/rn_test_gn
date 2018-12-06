import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import R, { Network, ToastUtil } from '../public/R';
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');

export default class App extends Component {
    static navigationOptions = {
        title: '更换手机号',
    };
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            code0: '',
            codeButton: '获取验证码',
            time: 60,
            username: ''
        }
    }

    _time() {
        if (this.state.time < 0) {
            this.setState({ codeButton: '获取验证码', time: 60 })
        } else {
            this.setState({ codeButton: '重新发送(' + this.state.time-- + ')' })
            setTimeout(() => {
                this._time()
            }, 1000);
        }
    }

    _getCode() {        
        
        if (this.state.username == '') {
            ToastUtil.toastShort("请填写手机号码。")
            return;
        }
        if (!(/^1[34578]\d{9}$/.test(this.state.username))) {
            ToastUtil.toastShort("手机号码有误，请重填。")
            return;
        }

        this._time()

        let params = {
            username: this.state.username
        }
        Network.fetchRequest('index.php/Home/Public/send_sms_reg_code', 'POST', params)
            .then(({ info, data, status }) => {
                if (status == '1') {
                    this.setState({ code0: data.code })
                    ToastUtil.toastShort("ok " + this.state.code0)
                } else {
                    ToastUtil.toastShort("no")
                }
            }).catch(error => {
                ToastUtil.toastShort(Network.ErrorMessage);
            });
    }

    _change() {
        if (this.state.code == '') {
            alert("请填写验证码。")
            return;
        }
        if (this.state.code0 != this.state.code) {
            alert("验证码错误");
            return;
        }
        let params = {
            token: '123456789',
            code: this.state.code,
            username: this.state.username
        }
        Network.fetchRequest('index.php/Home/Index/editphone', 'POST', params)
            .then(({ info, data, status }) => {
                if (status == '1') {
                    // this.props.navigation.goBack();
                    this.props.navigation.state.params.callBack();
                    this.props.navigation.goBack();
                } else {
                    alert("no")
                    this.props.navigation.goBack();
                }
            }).catch(error => {
                ToastUtil.toastShort(Network.ErrorMessage);
            });

    }

    componentDidMount() {
        // setTimeout(() => {
        //     SplashScreen.hide();
        // },1000)

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: 'white', height: 100, paddingLeft: 16, backgroundColor: 'white', marginTop: 6, }}>
                    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#EAEAEA', borderBottomWidth: 1 }}>
                        <TextInput
                            onChangeText={(newText) => this.setState({ username: newText })}
                            placeholder='请输入新的手机号码' keyboardType='numeric' style={{ flex: 1, }}></TextInput>
                        <TouchableOpacity style={{ marginRight: 16, marginLeft: 16 }}
                            onPress={() => { this.state.time == 60 ? this._getCode() : null }}
                        >
                            <TextInput
                                editable={false}
                                value={this.state.codeButton}
                                style={{ color: '#B92424', fontSize: 18, width: '100%', }}></TextInput>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        onChangeText={(newText) => this.setState({ code: newText })}
                        placeholder='请输入验证码' style={{ width: width * 0.9, height: 50, lineHeight: 50 }}></TextInput>
                </View>

                <View style={{ marginTop: 60, padding: 16, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity
                        onPress={() => { this._change() }}
                        style={{ width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 6, backgroundColor: '#B92424', height: 50 }}>
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
