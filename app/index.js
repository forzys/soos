
import React, { Component } from 'react';
import { ToastAndroid,BackHandler } from 'react-native';
import { createAppContainer,createMaterialTopTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
// import JPushModule from 'jpush-react-native'

import FunTab from './pages/fun/index'
import HomeTab from './pages/home/index'
import MineTab from './pages/mine/index'
import DiscountTab from './pages/discount/index'
import CommunityTab from './pages/community/index'

// 配置导航
const navigator = {
    Home: {
        screen: HomeTab,
        navigationOptions: () => ({
        tabBarLabel: '首页',
        tabBarIcon:(obj)=>(<Icon name="home" size={25} color={obj.tintColor} />)
        })
    },
    Fun: {
        screen: FunTab,
        navigationOptions: () => ({
        tabBarLabel: '娱乐',
        tabBarIcon:(obj)=>(<Icon name="heart" size={25} color={obj.tintColor} />)
        })
    },
    Discount:{
        screen: DiscountTab,
        navigationOptions: () => ({
        tabBarLabel: '优惠',
        tabBarIcon:(obj)=>(<Icon name="star" size={25} color={obj.tintColor} />)
        })
    },
    Community:{
        screen: CommunityTab,
        navigationOptions: () => ({
        tabBarLabel: '社区',
        tabBarIcon:(obj)=>(<Icon name="comment" size={25} color={obj.tintColor} />)
        })
    },
    Mine:{
        screen: MineTab,
        navigationOptions: () => ({
        tabBarLabel: '我的',
        tabBarIcon:(obj)=>(<Icon name="user" size={25}  color={obj.tintColor} />)
        })
    }
}
// 配置导航设置
const setting = {
    lazy: true,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    pressOpacity: 0.8,
    pressColor: 'teal',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: 'teal',
        inactiveTintColor:'grey',
        style: {
            backgroundColor: '#fff',
            color:'#f5f5f5',
        },
        labelStyle: {
            fontSize: 12,
            margin: 1
        },
        indicatorStyle: { height: 0 },
    },
}
// 创建导航器
const CreateTab = createAppContainer(createMaterialTopTabNavigator(navigator,setting))

class RootMain extends Component {

    componentDidMount(){
        // JPushModule.initPush()
        // JPushModule.addReceiveNotificationListener((message) => {})
        this.backHandler = BackHandler.addEventListener('hardwareBackPress',     
        this.onBackButtonPressAndroid);
    }
    componentWillUnmount() {
        this.backHandler&&this.backHandler.remove();
        // JPushModule.removeReceiveNotificationListener();
    }
    onBackButtonPressAndroid(){
        //最近2秒内按过back键，可以退出应用。
        if ( this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) return false;
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT); 
        return true;
    }
    render() {
        return (
            <CreateTab />
        );
      }
}
export default RootMain
