"use strict";
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Modal,
    FlatList,
} from 'react-native';
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
//const shadowWidth
/**
 * 类：侧边筛选功能modal
 */
export default class TestModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true,

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
        }
    }

    componentDidMount() {

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
                        <Text style={{ fontSize: 14, color: '#000000' }}>{item.isOpen ? '∧' : '∨'}</Text>
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
                        <Text style={{ fontSize: 14, color: item.isSelect ? '#B92324' : '#000000' }}>{item.name}</Text>
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

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ fontSize: 15, color: '#000000', paddingHorizontal: 12 }}
                    numberOfLines={2}
                >{'这是字这是字这是字这是字这是字这是字这是字这是字这是字这是字这是字这是字这是字这是字这是字这是字这是字这是是字这是是字这是字'}</Text>

                <TouchableOpacity onPress={() => {
                    this.setState({ showModal: true })
                }}>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 6 }}>
                        <Text style={{ fontSize: 18, color: '#FF0000' }}>{'点击打开筛选'}</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <View style={{ backgroundColor: 'rgba(0,0,0,.6)', flex: 1, flexDirection: 'row' }}>
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
                                            width: 75, height: 40, backgroundColor: '#B92324', justifyContent: 'center', alignItems: 'center',
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
                </Modal>
            </View>
        )
    }
}