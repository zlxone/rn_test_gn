import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity,FlatList } from 'react-native';
import R, { Network, ToastUtil } from '../public/R';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');


export default class App extends Component {
  static navigationOptions = {
    title: '搜索',
  };
  constructor(props) {
    super(props);
    this.state = {
      mydata0: [],
      content:''
    }
  }

  initList() {
    let params = {

    }
    Network.fetchRequest('index.php/Home/Public/hotsearch', 'POST', params)
      .then(({ info, data, status }) => {
        if (status == '1') {
          this.setState({ mydata0: data })
          // alert(this.state.mydata0[1].conten)

        } else {
          this.setState({ mydata0: null })
        }
      }).catch(error => {
        // ToastUtil.toastShort(Network.ErrorMessage);
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
        <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center', backgroundColor: 'white', marginLeft: 10, borderRadius: 8, height: 40, width: width - 20, borderColor: 'gray', borderWidth: 1, }}>
          <Image style={{ width: 20, height: 20, marginLeft: 8 }}
            source={require("../images/nav_but_icon_.png")}></Image>
          <TextInput
            placeholder='请输入搜索内容'
            value ={this.state.content}
            onChangeText={(newText) => this.setState({ content: newText })}
            style={{ height: 40, width: '100%', }}
          ></TextInput>
        </View>
        <View style={{ backgroundColor: 'white', paddingBottom: 30, marginTop: 8 }}>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', }}>热门搜索</Text>
          </View>
          <View style={{ flexWrap: 'wrap', width: width - 20, marginLeft: 10, flexDirection: 'row' }}>
            <FlatList
              ref={(flatList) => this._flatList = flatList}
              // ListHeaderComponent={this._header}
              // ListFooterComponent={this._footer}
              // ItemSeparatorComponent={this._separator}
              renderItem={this._renderItem}
              // onRefresh={this.refreshing}
              refreshing={false}
              onEndReachedThreshold={0}
              // onEndReached={this._onload}
              // numColumns ={3}
              // columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}
              horizontal={true}
              getItemLayout={(data, index) => (
                { length: 40, offset: 40 * index, index }
              )}
              // data={mydata.data}
              data={this.state.mydata0}
            >
            </FlatList>
            
          </View>
        </View>
      </View>
    );
  }

  _renderItem = (item) => {
    return (
      <TouchableOpacity>
        <Text style={styles.rmtext} onPress={() => this.setState({ content: '123' })}>{item.item.conten}</Text>
      </TouchableOpacity>
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
  rmtext: {
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#FFF0F0F0',
    color: '#FF666666',
    padding: 8,
    paddingLeft: 14,
    paddingRight: 14,
  }
});
