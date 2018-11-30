import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


export default class App extends Component {
    static navigationOptions = {
        title: '个人资料',
      };
    render() {
        return (
            <View style={styles.container}>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        头像
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 60, height: 60, marginRight: 8,borderRadius:30 }} source={require('../images/tx.png')}></Image>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        姓名
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 8 }}>叫我小小小圆子</Text>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>

                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        年龄
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 8 }}>20</Text>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        学校
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 8 }}>临沂大学</Text>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text>
                        身份
            </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 8 }}>学生</Text>
                        <Image source={require('../images/ljt.png')}></Image>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Changetel')}>
                <View style={{ padding: 10, backgroundColor: 'white', marginTop: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                        <Text>
                            更改手机号
            </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginRight: 8 }}>150...8989</Text>
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
