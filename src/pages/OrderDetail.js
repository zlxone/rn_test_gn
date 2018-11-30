import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image,Alert, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


export default class App extends Component {
  static navigationOptions = {
    title: '详情',
  };
  render() {
    return (
      <View style={styles.container}>

        <ScrollView>
          <View style={{ height: 200, width: width }}>
            <Swiper
              style={styles.swiper}
              height={200}
              horizontal={true}
              paginationStyle={{ bottom: 10 }}
              showsButtons={false}>
              <Image source={require('../images/lbt00.png')} style={styles.img} />
              <Image source={require('../images/lbt0.png')} style={styles.img} />
              <Image source={require('../images/lbt00.png')} style={styles.img} />
            </Swiper>
          </View>
          <View style={{ padding: 20, backgroundColor: 'white', marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
              淘宝街拍模特 高冷欧美风
            </Text>
            <Text style={{ color: '#ADAFB4', fontSize: 14, marginBottom: 8 }}>
              礼仪/模特
            </Text>
            <Text style={{ color: '#ADAFB4', fontSize: 14, marginBottom: 18 }}>
              人数：1人
            </Text>
            <Text style={{ color: '#B92424', fontSize: 18 }}>
              500/天
            </Text>
          </View>
          <View style={{ backgroundColor: 'white', padding: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 }}>
            <Text style={{ fontSize: 18 }}>
              公司名称
            </Text>
            <Text style={{ fontSize: 18 }}>
              临沂**文化传媒有限公司
            </Text>
          </View>

          <View style={{ backgroundColor: 'white', padding: 20, marginBottom: 1}}>
            <Text style={{ fontSize: 18, marginBottom: 6 }}>
              地址
            </Text>
            <Text style={{ fontSize: 16 }}>
              临沂市兰山区新汽车站北侧,琅琊王路与双岭路交会处 鸿儒国际文化广场
            </Text>
          </View>

          <View style={{ backgroundColor: 'white', padding: 20, height: 90, marginBottom: 1 }}>
            <Text style={{ color: '#666666', fontSize: 16 }}>
              特殊需求
            </Text>
            <View>
              <RadioGroup style={{ flexDirection: 'row' }}>
                <RadioButton style={{ width: width * 0.4, justifyContent: 'center' }}>
                  <Text>是</Text>
                </RadioButton>
                <RadioButton style={{ width: width * 0.4, justifyContent: 'center' }}>
                  <Text>否</Text>
                </RadioButton>
              </RadioGroup>
            </View>
          </View>
          <View style={{ backgroundColor: 'white', padding: 20, }}>
            <Text style={{ fontSize: 18, marginBottom: 6 }}>
              兼职详情
              </Text>
            <Text style={{ fontSize: 16 }}>
              早上八点到达指定地点，素颜，现场有化妆师有网拍经验者优先
              </Text>
          </View>
          <View style={{paddingTop:40,marginBottom:40,paddingLeft:15,paddingRight:15}}>
          <TouchableOpacity onPress={()=>Alert.alert('','您的资料不完善，请先完善资料',[{text: 'OK', onPress: () => console.log('OK Pressed')},],{cancelable:false})} style={{height:50,backgroundColor:'#B92424',borderRadius:4,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>
            立即报名
            </Text>
          </TouchableOpacity>
            {/* <Button title="立即报名" >
            </Button> */}
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
  },
  img: {
    width: width,
    height: 200,
  },
});
