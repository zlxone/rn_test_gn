import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import R,{ Network,ToastUtil } from '../public/R';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');
var mydata = require('../public/data.json');

export default class App extends Component {
  static navigationOptions = {
    title: '接单大厅',
  };
constructor(props){
  super(props);
  this.state={
    mydata0:[]
  }
}
  
  componentDidMount(){
    fetch('http://lightyear.lnkj6.com/index.php/Home/public/partlist', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then((response) => response.json())
      .then(({ info, data, status }) => {       // 获取到的数据处理
        this.setState({ mydata0: data })
      })
      .catch((error) => { // 错误处理
      })
      .done();

    // let params = {
    //   page:'10'
    // }
    // Network.fetchRequest('http://lightyear.lnkj6.com/index.php/Home/public/partlist','GET',params)
    //     .then(({info,data,status}) => {
    //         if(status == '1'){
    //             this.setState({mydata0:data})
    //           // console.log(this.state.mydata0.length)
    //         }else{

    //         }
    //     }).catch(error => {
    //         // ToastUtil.toastShort(Network.ErrorMessage);
    //     });
}


  render() {
    // var data = [];
    // for (var i = 0; i < mydata.data.length; i++) {
    //   data.push(mydata.data[i]);
    // }
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            ref={(flatList) => this._flatList = flatList}
            // ListHeaderComponent={this._header}
            // ListFooterComponent={this._footer}
            ItemSeparatorComponent={this._separator}
            renderItem={this._renderItem}
            // onRefresh={this.refreshing}
            refreshing={false}
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

      </View>
    );
  }

  _renderItem = (item) => {
    console.log(item)
    return (
      <View style={styles.jdcell}>
        <Image source={require('../images/jd1.png') /* {uri:item.item.photo_path} */} style={{ width: 110, height: 110 }}></Image>
        <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 6, color: '#222224' }}>{item.item.title}</Text>
          <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>{item.item.name}</Text>
          <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：{item.item.people}人</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <Text style={{ color: '#B92424', fontWeight: 'bold', fontSize: 18 }}>{item.item.wages}</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OrderDetail')}
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
