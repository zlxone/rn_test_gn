import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, SplashScreen } from 'react-native';
import R, { Network, ToastUtil } from '../public/R';
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


export default class App extends Component {
    static navigationOptions = {
        title: '个人资料',
    };

    constructor(props) {
        super(props);
        this.state = {
            myinfo: [],
            phone: ''
        }
    }

    initInfo() {
        let params = {
            token: '123456789'
        }
        Network.fetchRequest('index.php/Home/index/index', 'POST', params)
            .then(({ info, data, status }) => {
                if (status == '1') {
                    this.setState({ myinfo: data })
                    if (this.state.myinfo.identity = 0) {
                        this.setState({ identity: '学生' })
                    } else {
                        this.setState({ identity: '社会人士' })
                    }
                    // alert(JSON.stringify(this.state.myinfo))
                } else {
                    ToastUtil.toastShort("no")
                }
            }).catch(error => {
                ToastUtil.toastShort(Network.ErrorMessage);
            });
    }

    callBack() {
        this.initInfo()
    }

    componentDidMount() {
        // setTimeout(() => {
        //     SplashScreen.hide();
        // },1000)
        this.initInfo();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        头像
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 8, borderRadius: 30 }} source={{ uri: this.state.myinfo.photo_path }}></Image>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        姓名
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 8 }}>{this.state.myinfo.real_name}</Text>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        年龄
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 8 }}>{this.state.myinfo.ages}</Text>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        学校
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 8 }}>{this.state.myinfo.school}</Text>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        身份
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 8 }}>{this.state.identity}</Text>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Changetel', 
                { callBack:() => this.callBack() })}
                >
                    <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text>更改手机号</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginRight: 8 }}>{this.state.myinfo.username}</Text>
                            <Image source={require('../images/ljt.png')}></Image>
                        </View>

                    </View>
                </TouchableOpacity>
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
