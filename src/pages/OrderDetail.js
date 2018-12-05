import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import R, { Network, ToastUtil } from '../public/R';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');
const orderImage = Image.resolveAssetSource(require('../images/lbt0.png'));
const imgH = orderImage.height / (orderImage.width / width)


export default class App extends Component {
  static navigationOptions = {
    title: '详情',
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;

    this.state = {
      mydata0: [],
      itemId: navigation.getParam('itemId', '-1')

    }
  }

  _tj() {
    if (1 == 1) {
      fetch('index.php/Home/Public/partdetails', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "token=123456789"
      })
        .then((response) => response.json())
        .then(({ info, data, status }) => {       // 获取到的数据处理
          this.setState({ mydata0: data })
        })
        .catch((error) => { // 错误处理
        })
        .done();
    } else {
      Alert.alert('', '您的资料不完善，请先完善资料', [{ text: 'OK', onPress: () => console.log('OK Pressed') },], { cancelable: false })
    }
  }

  initDetail() {
    let params = {
      id: this.state.itemId
    }
    Network.fetchRequest('index.php/Home/Public/partdetails', 'POST', params)
      .then(({ info, data, status }) => {
        if (status == '1') {
          this.setState({ mydata0: data })
          // alert(JSON.stringify(this.state.mydata0[1]))
        } else {
          this.setState({ mydata0: [] })
        }
      }).catch(error => {
        ToastUtil.toastShort(Network.ErrorMessage);
      });
  }

  componentDidMount() {
    // this.state.itemId = this.props.getParam('itemId', '-1');
    this.initDetail();
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ width: width }}>
            <Swiper
              style={{ backgroundColor: 'white', marginBottom: 1 }}
              height={imgH}
              autoplay={true}
              horizontal={true}
              showsPagination={false}
              paginationStyle={{ bottom: 10 }}
              showsButtons={false}>
              <Image source={require('../images/lbt00.png')} style={styles.img} />
              <Image source={require('../images/lbt0.png')} style={styles.img} />
              <Image source={require('../images/lbt00.png')} style={styles.img} />
            </Swiper>
          </View>
          <View style={{ padding: 20, backgroundColor: 'white', marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
              {this.state.mydata0.title}
            </Text>
            <Text style={{ color: '#ADAFB4', fontSize: 14, marginBottom: 8 }}>
              {this.state.mydata0.name}
            </Text>
            <Text style={{ color: '#ADAFB4', fontSize: 14, marginBottom: 18 }}>
              人数：{this.state.mydata0.people}人
            </Text>
            <Text style={{ color: '#B92424', fontSize: 18 }}>
              {this.state.mydata0.wages}
            </Text>
          </View>
          <View style={{ backgroundColor: 'white', padding: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 }}>
            <Text style={{ fontSize: 18 }}>
              公司名称
            </Text>
            <Text style={{ fontSize: 18 }}>
              {this.state.mydata0.company}
            </Text>
          </View>

          <View style={{ backgroundColor: 'white', padding: 20, marginBottom: 1 }}>
            <Text style={{ fontSize: 18, marginBottom: 6 }}>
              地址
            </Text>
            <Text style={{ fontSize: 16 }}>
              {this.state.mydata0.address}
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
              {this.state.mydata0.special}
            </Text>
          </View>
          <View style={{ paddingTop: 40, marginBottom: 40, paddingLeft: 15, paddingRight: 15 }}>
            <TouchableOpacity onPress={() => { this._tj() }}
              style={{ height: 50, backgroundColor: '#B92424', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
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
    resizeMode: 'contain',
    width: width,
    height: imgH,
  },
});
