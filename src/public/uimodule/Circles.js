"use strict";
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window')
class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animated: [],
            recursionArr: [],
            archivePointArr: []
        };
    }
    componentWillMount() {
        this.animatedInit()
    }
    animatedInit() {
        let _this = this
        let animatedArr = []
        let recursionArr = []
        this
            .props
            .config
            .forEach((config, index) => {
                console.log(config.duration)
                let animated = new Animated.Value(0)
                function recursion() {
                    animated.setValue(_this.state.archivePointArr[index] || 0)
                    Animated.timing(animated, {
                        toValue: 1,
                        duration: (1 - _this.state.archivePointArr[index]) * config.duration || config.duration,
                        easing: Easing.linear
                    }).start((status) => {
                        if (status.finished) {
                            animated.setValue(0)
                            _this.setState({ archivePointArr: [] })
                            recursion()
                        }
                    })
                }
                animatedArr.push(animated)
                recursionArr.push(recursion)
            })
        this.setState({ animated: animatedArr, recursionArr: recursionArr })
    }
    start() {
        this
            .state
            .recursionArr
            .forEach(func => {
                func()
            })
    }
    stop() {
        let _this = this
        let archivePointArr = []
        this
            .state
            .animated
            .forEach((animated, index) => {
                animated.stopAnimation(archivePoint => {
                    archivePointArr.push(archivePoint)
                })
            })
        this.setState({ archivePointArr: archivePointArr })
    }
    renderItem(config, index) {
        return <Animated.View
            style={[
                config.styles, {
                    transform: [
                        {
                            rotateZ: this
                                .state
                                .animated[index]
                                .interpolate({
                                    inputRange: [
                                        0, 1
                                    ],
                                    outputRange: config.rotate
                                })
                        }
                    ]
                }
            ]}></Animated.View>
    }
    render() {
        return (
            <SafeAreaView>
                <TouchableOpacity style={{width:200,height:100}} onPress={() => this.start()}>
                    <Text>开始</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.stop()}>
                    <Text>暂停</Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    {this.props.config.map((config, index) => this.renderItem(config, index))}
                    <View style={styles.circle5}></View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Circle;
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        left: (width - 200) / 2,
        top: (height - 200) / 2,
        width: 200,
        height: 200
    },
    circle1: {
        position: 'absolute',
        left: -50,
        top: -25,
        width: 350,
        height: 300,
        borderTopLeftRadius: 175,
        borderTopRightRadius: 130,
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 140,
        backgroundColor: 'rgba(255, 237, 191, .7)'
    },
    circle2: {
        position: 'absolute',
        left: -50,
        top: -25,
        width: 350,
        height: 300,
        borderRadius: 150,
        backgroundColor: 'rgba(249, 222, 192, .7)'
    },
    circle5: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 200,
        height: 200,
        borderRadius: 125,
        borderWidth: 1,
        borderColor: '#f4903a',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    }
})