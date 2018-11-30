import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../pages/Home'
import Mine from '../pages/Mine'
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

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //     </View>
  //   );
  // }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item 
        title='兼职大厅'
          selected={this.state.selectedIndex == 0}
          titleStyle={{ color: '#222224' }}    
          tabStyle={{alignSelf:'center'}}     
          
          selectedTitleStyle={{ color: '#222224' }}
          // badgeText='兼职大厅'
          allowFontScaling={false}
          renderIcon={() =>
            <Image source={require('../images/tab_icon_home_n.png')} style={styles.iconStyle} />
          }
          renderSelectedIcon={() =>
            <Image source={require('../images/tab_icon_home_s.png')} style={styles.iconStyle} />
          }
          onPress={() =>
            this.setState({
              selectedIndex: 0
            })
          }
        >
          <View style={[styles.viewStyle, { backgroundColor: 'white' }]}>
            <Home navigation = {this.props.navigation} />
          </View>
        </TabNavigator.Item>

        <TabNavigator.Item title='我'
          selected={this.state.selectedIndex == 1}
          titleStyle={{ color: '#222224' }}
          selectedTitleStyle={{ color: '#222224' }}
          // badgeText={10}
          renderIcon={() =>
            <Image source={require('../images/tab_icon_me_n.png')} style={styles.iconStyle} />
          }
          renderSelectedIcon={() =>
            <Image source={require('../images/tab_icon_me_s.png')} style={styles.iconStyle} />
          }
          onPress={() =>
            this.setState({
              selectedIndex: 1
            })
          }
        >
          <View style={[styles.viewStyle, { backgroundColor: 'white' }]}>
            <Mine  navigation = {this.props.navigation}/>
          </View>

        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}


const RootStack = createStackNavigator({
  Main: {
    screen: Tab,
    navigationOptions: {
        header: null
    }
},
  Search: {
    screen: Search
  },
  OrderTaking:OrderTaking,
  OrderDetail:OrderDetail,
  Personal:Personal,
  Changetel:Changetel,
},
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#000000',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign:'center',
        width:'78%',
        fontSize:20,
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