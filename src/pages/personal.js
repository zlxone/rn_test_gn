import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import R,{ Network,ToastUtil } from '../public/R';
var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


export default class App extends Component {
    static navigationOptions = {
        title: '个人资料',
      };

      constructor(props){
          super(props);

      }

      componentDidMount() {

        fetch('http://lightyear.lnkj6.com/index.php/Home/index/index', {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: "token=123456789"
        })
          .then((response) => response.json())
          .then(({ info, data, status }) => {       // 获取到的数据处理
            this.setState({ mydata0: data })
            alert(data[0].real_name)
          })
          .catch((error) => { // 错误处理
            // ToastUtil.toastShort(Network.ErrorMessage);
          })
          .done();
    
    
        // let params = {
        //   page: '10'
        // }
        // Network.fetchRequest('http://lightyear.lnkj6.com/index.php/Home/public/partlist', 'POST', params)
        //   .then(({ info, data, status }) => {
        //     if (status == '1') {
        //       alert("123789")
        //       this.setState({ mydata0: data })
        //       alert("123")
        //     } else {
    
        //     }
        //   }).catch(error => {
        //     ToastUtil.toastShort(Network.ErrorMessage);
        //   });
      }

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
