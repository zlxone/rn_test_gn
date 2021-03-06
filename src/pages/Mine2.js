import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import R, { Network, ToastUtil } from '../public/R';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window');
var mydata = require('../public/data.json');

export default class App extends Component {
    static navigationOptions = {
        title: '我',
    };
    constructor(props) {
        super(props);
        this.state = {
            all: styles.choosed,
            ybm: null,
            ywc: null,
            ypj: null,
            yjj: null,
            chooseItem: styles.jdcell,
            show: null,
            showybm: null,
            showywc: null,
            showypj: null,
            showyjj: null,
            data: null,
            dataybm: null,
            dataywc: null,
            dataypj: null,
            datayjj: null,
            mydata0: [],
            myinfo: [],
            identity:'',
            type: ''
        }
    }


    initRecord() {
        let params = {
            token: '123456789',
            type: this.state.type
        }
        Network.fetchRequest('index.php/Home/Index/record', 'POST', params)
            .then(({ info, data, status }) => {
                if (status == '1') {
                    this.setState({ mydata0: data })
                    alert(JSON.stringify(this.state.mydata0))
                } else {
                    alert("999")
                }
            }).catch(error => {
                // ToastUtil.toastShort(Network.ErrorMessage);
            });
    }

    initInfo(){
        let params = {
            token: '123456789'
        }
        Network.fetchRequest('index.php/Home/index/index', 'POST', params)
            .then(({ info, data, status }) => {
                if (status == '1') {
                    this.setState({ myinfo: data })
                    if(this.state.myinfo.identity = 0){
                        this.setState({ identity: '学生' })
                    }else{
                        this.setState({ identity: '社会人士' })
                    }
                    // alert(JSON.stringify(this.state.myinfo))
                } else {
                    alert("222")
                }
            }).catch(error => {
                // ToastUtil.toastShort(Network.ErrorMessage);
            });
    }

    componentDidMount() {
        // setTimeout(() => {
        //     SplashScreen.hide();
        // },1000)
        this.initRecord();
        this.initInfo();
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', width: width, height: 64, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 19, height: 64, lineHeight: 64, color: 'black' }}>我</Text>
                </View>
                <ScrollView stickyHeaderIndices={[1]}>
                    <View style={{ backgroundColor: 'white', marginTop: 6, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ width: 70, height: 70, marginRight: 8, borderRadius: 35 }} source={{uri:this.state.myinfo.photo_path}}></Image>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 18 }}>{this.state.myinfo.username}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: 124, marginTop: 4 }}>
                                    <Text style={{ marginRight: 24 }}>{this.state.identity}</Text>
                                    <Text>{this.state.myinfo.ages}岁</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Personal')}>
                            <Image source={require('../images/ljt.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: 'white', marginTop: 10, paddingTop: 16, }}>
                        <Text style={{ fontSize: 18, color: '#222224', paddingLeft: 16, paddingRight: 16, marginBottom: 10 }}>我的兼职</Text>
                        <View style={{ flexDirection: 'row', height: 30, justifyContent: 'space-around' }}>
                            <Text style={this.state.all}
                                onPress={() => this.setState({ chooseItem: styles.jdcell, all: styles.choosed, ybm: null, ywc: null, ypj: null, yjj: null, })}
                            >全部</Text>
                            <Text style={this.state.ybm}
                                onPress={() => this.setState({ chooseItem: styles.jdcellybm, all: null, ybm: styles.choosed, ywc: null, ypj: null, yjj: null, })}
                            >已报名</Text>
                            <Text style={this.state.ywc}
                                onPress={() => this.setState({ chooseItem: styles.jdcellywc, all: null, ybm: null, ywc: styles.choosed, ypj: null, yjj: null, })}
                            >已完成</Text>
                            <Text style={this.state.ypj}
                                onPress={() => this.setState({ chooseItem: styles.jdcellypj, all: null, ybm: null, ywc: null, ypj: styles.choosed, yjj: null, })}
                            >已评价</Text>
                            <Text style={this.state.yjj}
                                onPress={() => this.setState({ chooseItem: styles.jdcellyjj, all: null, ybm: null, ywc: null, ypj: null, yjj: styles.choosed, })}
                            >已拒绝</Text>
                        </View>
                    </View>

                    {this._renderList()}

                </ScrollView>
            </View >
        );
    }

    _renderList = () => {
        var data = [];
        var dataybm = [];
        var dataywc = [];
        var dataypj = [];
        var datayjj = [];
        for (var i = 0; i < mydata.data.length; i++) {
            data.push(mydata.data[i]);
            if (mydata.data[i].type == 0) {
                dataybm.push(mydata.data[i]);
            } else if (mydata.data[i].type == 1) {
                dataywc.push(mydata.data[i])
            } else if (mydata.data[i].type == 2) {
                dataypj.push(mydata.data[i])
            } else if (mydata.data[i].type == 3) {
                datayjj.push(mydata.data[i])
            }
        }
        var selectData = this.state.chooseItem = this.state.ybm ? dataybm :
            this.state.chooseItem = this.state.ywc ? dataywc :
                this.state.chooseItem = this.state.ypj ? dataypj :
                    this.state.chooseItem = this.state.yjj ? datayjj :
                        data;


        return (
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
                data={selectData}
            >
            </FlatList>
        );

    }

    _renderItem = (item) => {
        return (
            <View style={styles.jdcell}>
                <Image source={require('../images/jd1.png') /* {uri:item.item.photo_path} */} style={{ width: 110, height: 110 }}></Image>
                <View style={{ width: width - 140, justifyContent: 'center', paddingLeft: 15 }}>
                    <Text style={{ fontSize: 16, marginBottom: 6, color: '#222224' }}>{item.item.title}</Text>
                    <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 6 }}>{item.item.name}</Text>
                    <Text style={{ color: '#ADAFB4', fontSize: 12, marginBottom: 10 }}>人数：{item.item.people}人</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Text style={{ color: '#B92424', fontWeight: 'bold', fontSize: 18 }}>{item.item.wages}</Text>
                        {this._renderButton()}
                    </View>
                </View>
            </View>
        )

    }

    _renderButton = () => {
        if (this.state.ybm != null) {
            return (
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 2 }}>
                    <Text style={{ color: '#222224', width: 60, paddingLeft: 8, fontWeight: 'bold' }}>已报名</Text>
                </TouchableOpacity>
            )
        } else if (this.state.ywc != null) {
            return (
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 4, backgroundColor: '#B92424', paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: '#B92424', borderRadius: 2 }}>
                    <Text style={{ color: '#222224', width: 60, paddingLeft: 8, fontWeight: 'bold' }}>待评价</Text>
                </TouchableOpacity>
            )
        } else if (this.state.ypj != null) {
            return (
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 4, backgroundColor: '#222224', paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: '#222224', borderRadius: 2 }}>
                    <Text style={{ color: '#B92424', width: 60, paddingLeft: 8, fontWeight: 'bold' }}>已完成</Text>
                </TouchableOpacity>
            )
        } else if (this.state.yjj != null) {
            return (
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 4, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: '#B92424', borderRadius: 2 }}>
                    <Text style={{ color: '#B92424', width: 60, paddingLeft: 8, fontWeight: 'bold' }}>已拒绝</Text>
                </TouchableOpacity>
            )
        }
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    choosed: {
        height: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#B92424',
        color: '#B92424'
    },
    jdcell: {
        height: 142,
        width: width,
        padding: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 1,
    },

});
