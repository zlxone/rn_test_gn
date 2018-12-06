// "use strict";
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, StatusBar, Dimensions, Modal, FlatList, SplashScreen } from 'react-native';
import Swiper from 'react-native-swiper';
import R, { Network, ToastUtil } from '../public/R';


// var Dimensions = require('Dimensions');
// var { width } = Dimensions.get('window');

// export default class App extends Component {
//   static navigationOptions = {
//     title: '接单大厅',
//   };
//   constructor(props) {
//     super(props)

//   }



/* 三方库引入 */

/* class通用常量 */
var CLASS_NAME = '筛选';
var CLASS_VALUE = '';

const TYPE_CHECKBOX = 't1'; //复选
const TYPE_RADIO_SEX = 't2_1';//性别
const TYPE_RADIO_SQUARE = 't2_2'; //单选 方形
const TYPE_RADIO_DEMAND = 't2_3';//是否

const width = Dimensions.get('window').width; //整个屏幕的宽度
const height = Dimensions.get('window').height; //整个屏幕的高度
const shadowWidth = 100;
const itemMargin = 12;
const itemNumColumns = 3;
const itemWidth = ((width - shadowWidth) - (itemNumColumns + 1) * itemMargin) / itemNumColumns;
const itemHeight = 0; //高度不需要自定义 这里不作处理
const orderImage = Image.resolveAssetSource(require('../images/lbt0.png'));
const imgH = orderImage.height / (orderImage.width / width)
var mydata = require('../public/data.json');
//const shadowWidth
/**
 * 类：侧边筛选功能modal
 */
export default class HomePage extends Component {
  static navigationOptions = {
    title: '兼职大厅',
  };
  _keyExtractor = (item, index) => item.id;
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      titleList: [
        { id: 1, title: '兼职类型', type: TYPE_CHECKBOX, isOpen: true },
        { id: 2, title: '特殊需求', type: TYPE_RADIO_DEMAND, isOpen: true },
        { id: 3, title: '发布时间', type: TYPE_RADIO_SQUARE, isOpen: true },
        { id: 4, title: '性别', type: TYPE_RADIO_SEX, isOpen: false },
      ],

      typeList: [
        { id: 1, c_id: 1, name: '传单', isSelect: false },
        { id: 2, c_id: 1, name: '礼仪/模特', isSelect: false },
        { id: 3, c_id: 1, name: '创意策划', isSelect: false },
        { id: 4, c_id: 1, name: '唱吧驻唱', isSelect: false },
        { id: 5, c_id: 1, name: '活动策划', isSelect: false },
        { id: 6, c_id: 1, name: '促销/导购', isSelect: false },
        { id: 7, c_id: 1, name: '摄影录像', isSelect: false },
        { id: 8, c_id: 1, name: '志愿者', isSelect: false }
      ],
      timeList: [
        { id: 1, c_id: 3, name: '今天', isSelect: false },
        { id: 2, c_id: 3, name: '一周内', isSelect: false },
        { id: 3, c_id: 3, name: '一月内', isSelect: false }
      ],
      demand: true, //true为是  false为否
      sex: true, //true为男  false为女
      mydata0: [],
      mybanner: [],
      refreshState: true,
      page: '1'
      // content:this.props.navigation.getParam('content', '')
    }
  }


  save() {
    let s = '';

    s += '兼职类型：\n';
    let list1 = this.state.typeList;
    for (let i = 0; i < list1.length; i++) {
      let item = list1[i];
      if (item.isSelect) {
        s += item.name + ',';
      }
    }
    s += '\n特殊需求：\n';
    s += this.state.demand ? '是' : '否'
    s += '\n发布时间：\n';
    let list2 = this.state.timeList;
    for (let i = 0; i < list2.length; i++) {
      let item = list2[i];
      if (item.isSelect) {
        s += item.name + ',';
      }
    }
    s += '\n性别：\n';
    s += this.state.sex ? '男' : '女'

    alert(s);
  }

  clear() {
    let list1 = this.state.typeList;
    for (let i = 0; i < list1.length; i++) {
      let item = list1[i];
      item.isSelect = false;
    }
    let list2 = this.state.timeList;
    for (let i = 0; i < list2.length; i++) {
      let item = list2[i];
      item.isSelect = false;
    }
    let itemList1 = [];
    let itemList2 = [];
    this.setState({
      typeList: itemList1.concat(list1),
      timeList: itemList1.concat(list2),
      demand: true,
      sex: true,
    })
  }

  onTitle(bean) {
    let list = this.state.titleList;
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      if (item.id === bean.id) {
        item.isOpen = !bean.isOpen;
      }
    }
    let itemList = [];
    this.setState({
      titleList: itemList.concat(list)
    })
  }
  titleView(item) { // ∨ ∧
    return (
      <View key={item.id}>
        {this.dividingLine()}
        <TouchableOpacity onPress={() => {
          this.onTitle(item)
        }}>
          <View style={{ width: '100%', height: 49, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 14, color: '#000000' }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: '#000000' }}>{item.isOpen ? '▲' : '▼'}</Text>
          </View>
        </TouchableOpacity>
        {
          item.isOpen ?
            (
              item.type === TYPE_CHECKBOX ?
                this.chechboxView(this.state.typeList)
                :
                item.type === TYPE_RADIO_SEX ?
                  this.radioView(TYPE_RADIO_SEX)
                  :
                  item.type === TYPE_RADIO_SQUARE ?
                    this.chechboxView(this.state.timeList)
                    :
                    item.type === TYPE_RADIO_DEMAND ?
                      this.radioView(TYPE_RADIO_DEMAND)
                      :
                      <View style={{ width: 0, height: 0 }} />
            )
            :
            <View style={{ width: 0, height: 0 }} />
        }
      </View>
    )
  }

  /*======= 这是 TYPE_CHECKBOX 的View =======*/

  onCheckChechbox(bean) { //B92324
    if (bean.c_id === 1) {
      //这是多选
      let list = this.state.typeList;
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        if (item.id === bean.id) {
          if (item.isSelect) {
            item.isSelect = false;
          } else {
            item.isSelect = true;
          }
        }
      }
      let itemList = [];
      this.setState({
        typeList: itemList.concat(list)
      })
    } else if (bean.c_id === 3) {
      //这是单选
      let list = this.state.timeList;
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        if (item.id === bean.id) {
          item.isSelect = true;
        } else {
          item.isSelect = false;
        }
      }
      let itemList = [];
      this.setState({
        timeList: itemList.concat(list)
      })
    }
  }

  _itemChechboxView(items, index) {
    let item = items.item;
    return (
      <TouchableOpacity onPress={() => {
        this.onCheckChechbox(item)
      }}>
        <View style={{
          width: itemWidth + itemMargin, alignItems: 'center',
        }}>
          <View style={{
            width: itemWidth, paddingVertical: 6, backgroundColor: '#F7F8F7', borderWidth: 1, borderColor: item.isSelect ? '#B92324' : '#B8B9BD',
            justifyContent: 'center', alignItems: 'center',
          }}>
            <Text style={{ fontSize: 12, color: item.isSelect ? '#B92324' : '#000000' }}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  _itemSeparatorComponent() {
    return (
      <View style={{ width: '100%', height: 8, backgroundColor: '#FFFFFF' }} />
    )
  }
  chechboxView = (list) => {
    return (
      <FlatList
        style={{ paddingHorizontal: itemMargin / 2, marginBottom: 12 }}
        data={list}
        keyExtractor={(item, index) => 'p' + index}
        renderItem={this._itemChechboxView.bind(this)}
        numColumns={itemNumColumns}
        ItemSeparatorComponent={this._itemSeparatorComponent}
      //columnWrapperStyle = {{justifyContent : 'space-between'}} //适配不是很好
      />
    )
  }

  /*======= 这是 TYPE_RADIO 的View =======*/

  sexRadioView() {
    let bool = this.state.sex;
    return (
      <View style={{
        width: '100%', height: 49, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
        paddingHorizontal: 30,
      }}>
        <TouchableOpacity onPress={() => {
          this.setState({ sex: true })
        }}>
          <View style={{
            paddingHorizontal: 10, flexDirection: 'row'
          }}>
            <View style={{
              width: 18, height: 18, backgroundColor: bool ? '#B92324' : '#FFFFFF', borderWidth: 1, borderColor: '#B8B9BD', borderRadius: 9,
            }} />
            <Text style={{ fontSize: 15, color: '#B8B9BD', marginLeft: 3 }}>{'男'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.setState({ sex: false })
        }}>
          <View style={{
            paddingHorizontal: 10, flexDirection: 'row'
          }}>
            <View style={{
              width: 18, height: 18, backgroundColor: bool ? '#FFFFFF' : '#B92324', borderWidth: 1, borderColor: '#B8B9BD', borderRadius: 9,
            }} />
            <Text style={{ fontSize: 15, color: '#B8B9BD', marginLeft: 3 }}>{'女'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  demandRadioView() {
    let bool = this.state.demand;
    return (
      <View style={{
        width: '100%', height: 49, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
        paddingHorizontal: 30,
      }}>
        <TouchableOpacity onPress={() => {
          this.setState({ demand: true })
        }}>
          <View style={{
            paddingHorizontal: 10, flexDirection: 'row'
          }}>
            <View style={{
              width: 18, height: 18, backgroundColor: bool ? '#B92324' : '#FFFFFF', borderWidth: 1, borderColor: '#B8B9BD', borderRadius: 9,
            }} />
            <Text style={{ fontSize: 15, color: '#B8B9BD', marginLeft: 3 }}>{'是'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          this.setState({ demand: false })
        }}>
          <View style={{
            paddingHorizontal: 10, flexDirection: 'row'
          }}>
            <View style={{
              width: 18, height: 18, backgroundColor: bool ? '#FFFFFF' : '#B92324', borderWidth: 1, borderColor: '#B8B9BD', borderRadius: 9,
            }} />
            <Text style={{ fontSize: 15, color: '#B8B9BD', marginLeft: 3 }}>{'否'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  radioView(type) {
    if (type === TYPE_RADIO_SEX) {
      return (
        this.sexRadioView()
      )
    } else if (type === TYPE_RADIO_DEMAND) {
      return (
        this.demandRadioView()
      )
    }
  }

  itemTitleListView() {
    let list = this.state.titleList;
    let itemView = [];
    for (let i = 0; i < list.length; i++) {
      itemView.push(
        this.titleView(list[i])
      );
    }
    return (
      <View>{itemView}</View>
    )
  }

  dividingLine() {
    return (
      <View style={{ width: '100%', height: 1, backgroundColor: '#F4F5F4' }} />
    )
  }

  initList() {
    let params = {
      page: this.state.page,
      token: '123456789',
      // search: //this.state.content
    }
    Network.fetchRequest('index.php/Home/public/partlist', 'POST', params)
      .then(({ info, data, status }) => {
        if (status == '1') {
          this.setState({ mydata0: data, refreshState: false })

        } else {
          this.setState({ mydata0: null, refreshState: false })
        }
      }).catch(error => {
        ToastUtil.toastShort(Network.ErrorMessage);
      });
  }

  initBanner() {
    let params = {

    }
    Network.fetchRequest('index.php/Home/Public/banner', 'POST', params)
      .then(({ info, data, status }) => {
        if (status == '1') {
          this.setState({ mybanner: data })
        } else {
          this.setState({ mybanner: null })
        }
      }).catch(error => {
        ToastUtil.toastShort(Network.ErrorMessage);
      });
  }

  componentDidMount() {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 1000)
    this.initList(); //初始化列表
    this.initBanner();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <View style={{ alignItems: 'center', width: width, height: 64, backgroundColor: 'white' }}>
          <Text style={{ fontSize: 19, height: 64, lineHeight: 64, color: 'black' }}>光年达意人力资源</Text>
        </View>
        <ScrollView >
          <View style={{ flexDirection: 'row', paddingLeft: 15, paddingRight: 15, height: 40, alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
              <View style={{ flexDirection: 'row', paddingLeft: 8, marginTop: 8, alignItems: 'center', backgroundColor: 'white', borderRadius: 8, height: 40, width: width - 70, borderColor: 'gray', borderWidth: 1, }}>
                <Image style={{ width: 20, height: 20, }}
                  source={require("../images/nav_but_icon_.png")}></Image>
                <TextInput
                  placeholder='请输入想搜索的兼职'
                  editable={false}
                  style={{ height: 40, width: width - 70, lineHeight: 40 }}
                ></TextInput>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.setState({ showModal: true }) }}>
              <Image
                style={{ width: 28, height: 28, marginTop: 7 }}
                source={require('../images/nav_but_icon_n.png')}>
              </Image>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 8 }}>
            <Swiper
              style={{ backgroundColor: 'white', marginBottom: 1 }}
              height={imgH}
              autoplay={true}
              horizontal={true}
              showsPagination={false}
              paginationStyle={{ bottom: 10 }}
              showsButtons={false}>
              <Image source={{ uri: this.state.mybanner.img }} style={styles.img} />
              <Image source={require('../images/lbt0.png')} style={styles.img} />
              <Image source={require('../images/lbt0.png')} style={styles.img} />
            </Swiper>
          </View>
          <View
            style={{ height: 41, width: width, padding: 6, backgroundColor: '#F5F5F5', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 6 }}>
              <Image style={{ width: 10, height: 10 }} source={require('../images/del_icon1.png')}></Image>
              <Text style={{ fontSize: 14, marginLeft: 4, marginRight: 4 }}>接单大厅</Text>
              <Image style={{ width: 10, height: 10 }} source={require('../images/del_icon2.png')}></Image>
            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderTaking')}>
              <Image style={{ width: 20, height: 20 }} source={require('../images/icon_more_n.png')}></Image>
            </TouchableOpacity>

          </View>

          <FlatList
            keyExtractor={this._keyExtractor}
            ref={(flatList) => this._flatList = flatList}
            // ListHeaderComponent={this._header}
            // ListFooterComponent={this._footer}
            ItemSeparatorComponent={this._separator}
            renderItem={this._renderItem}
            onRefresh={this._refreshing}
            refreshing={this.state.refreshState}
            onEndReachedThreshold={0}
            onEndReached={this._loadMore}
            // numColumns ={3}
            // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}
            // horizontal={true}
            getItemLayout={(data, index) => (
              { length: imgH, offset: imgH * index, index }
            )}
            // data={mydata.data}
            data={this.state.mydata0}
          >
          </FlatList>
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
          onRequestClose={() => this.setState({ showModal: false })}
        >
          <ScrollView>
            <View style={{ backgroundColor: 'rgba(0,0,0,.6)', flex: 1, flexDirection: 'row', height: height }}>
              <TouchableOpacity style={{ backgroundColor: 'transparent' }} activeOpacity={1} onPress={() => { this.setState({ showModal: false }) }}>
                <View style={{ width: shadowWidth, height: '100%', backgroundColor: 'transparent', }} />
              </TouchableOpacity>
              <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                {/* title */}
                <View style={{
                  width: '100%', height: 45, marginTop: 44, justifyContent: 'center', alignItems: 'center',
                }}>
                  <Text style={{ fontSize: 18, color: '#000000' }}>{'筛选'}</Text>
                </View>

                {this.itemTitleListView()}

                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', marginRight: 25 }}>
                    <TouchableOpacity onPress={() => {
                      this.clear();
                    }}>
                      <View style={{
                        width: 75, height: 40, backgroundColor: '#B92424', justifyContent: 'center', alignItems: 'center',
                        borderTopLeftRadius: 20, borderBottomLeftRadius: 20,
                      }}>
                        <Text style={{ fontSize: 15, color: '#000000' }}>{'重置'}</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                      this.save();
                    }}>
                      <View style={{
                        width: 75, height: 40, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center',
                        borderTopRightRadius: 20, borderBottomRightRadius: 20,
                      }}>
                        <Text style={{ fontSize: 15, color: '#B92324' }}>{'确定'}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </Modal>

      </View>
    );
  }

  _renderBanner = (item) => {
    return (
      <Image source={{ uri: item.item.img }} style={styles.img} />
    );
  }

  _renderItem = (item) => {
    return (
      <View style={styles.jdcell}>
        <Image source={{ uri: item.item.photo_path }} style={{ width: 110, height: 110 }}></Image>
        <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 6, color: '#222224' }}>{item.item.title}</Text>
          <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>{item.item.name}</Text>
          <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：{item.item.people}人</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <Text style={{ color: '#B92424', fontWeight: 'bold', fontSize: 18 }}>{item.item.wages}</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OrderDetail', { itemId: item.item.id, token: '123456789' })}
              style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 2 }}>
              <Text style={{ color: '#222224', fontWeight: 'bold' }}>立即报名</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _separator = () => {
    return <View style={{ height: 1, backgroundColor: '#EAEAEA' }} />;
  }

  _refreshing = () => {
    this.setState({ refreshState: true })
    this.initList()
  }

  _loadMore = () => {
    this.setState({ page: this.state.page++ })
    ToastUtil.toastShort('more ' + this.state.page)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
  },
  img: {
    resizeMode: 'contain',
    width: width,
    height: imgH,
  },
  jdcell: {
    height: 142,
    width: width,
    padding: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#EAEAEA',
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});
