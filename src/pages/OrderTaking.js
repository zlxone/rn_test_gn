import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import R, { Network, ToastUtil } from '../public/R';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');
var mydata = require('../public/data.json');

export default class App extends Component {
  static navigationOptions = {
    title: '接单大厅',
  };
  _keyExtractor = (item, index) => item.id;
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      mydata0: [],
      refreshState: true,
      content: navigation.getParam('content', '')
    }
  }

  initList() {
    // console.log("content "+this.state.content);
    let params = {
      token: '123456789',
      // type_id:'888', //this.state.content,
      search: this.state.content
    }
    Network.fetchRequest('index.php/Home/public/partlist', 'POST', params)
      .then(({ info, data, status }) => {
        if (status == '1') {
          // console.log(data)
          this.setState({ mydata0: data, refreshState: false })
        } else {
          this.setState({ refreshState: false })
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

  }


  render() {
    return (
      <View style={styles.container}>
        {this.state.mydata0.length == 0 ?
          <View style={{ backgroundColor: 'white', width: '100%', height: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text>四大皆空</Text>
          </View> :
          <ScrollView>
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
              // onEndReached={this._onload}
              // numColumns ={3}
              // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}
              //horizontal={true}
              getItemLayout={(data, index) => (
                { length: 142, offset: 142 * index, index }
              )}
              data={this.state.mydata0}>
              >
          </FlatList>
          </ScrollView>
        }
      </View>
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
