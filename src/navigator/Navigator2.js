import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, } from 'react-navigation';
// import TabNavigator from 'react-native-tab-navigator';
import Home from '../pages/Home'
import Mine from '../pages/Mine'
import Mine2 from '../pages/Mine2'
import OrderTaking from '../pages/OrderTaking'
import Search from '../pages/Search'
import OrderDetail from '../pages/OrderDetail'
import Personal from '../pages/personal'
import Changetel from '../pages/Changetel'


class BackImg extends Component {
    render() {
        return(
            <Image source={require('../images/icon_bake.png')} style={{width:24,height:24}}/>
        );
    }
}


const Tab = createBottomTabNavigator(
    {
        Home:  Home,
        Mine: Mine2,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        focused ? <Image source={require('../images/tab_icon_home_s.png')} style={styles.iconStyle} /> : <Image source={require('../images/tab_icon_home_n.png')} style={styles.iconStyle} />
                    )
                } else if (routeName === 'Mine') {
                    return (
                        focused ? <Image source={require('../images/tab_icon_me_s.png')} style={styles.iconStyle} /> : <Image source={require('../images/tab_icon_me_n.png')} style={styles.iconStyle} />)
                }

            },
        }),
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#222224',
            inactiveTintColor: '#222224',
        },
        animationEnabled: false,
        swipeEnabled: false,
       } 
)


const RootStack = createStackNavigator({
    Main: {
        screen: Tab,
        navigationOptions: {
            header: null
        }
    },
    Search:  Search,        
    OrderTaking: OrderTaking,
    OrderDetail: OrderDetail,
    Personal: Personal,
    Changetel: Changetel,
},
    {
        initialRouteName: 'Main',
        navigationOptions: {
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              textAlign:'center',
              width:'72%',
              fontSize:19,
            },
            headerBackImage: <BackImg/>  
          },          
                     
    }

);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle: {
        width: 26,
        height: 26,
    },
    viewStyle: {
        flex: 1,
    }
})


// export default Tab;
export default RootStack;