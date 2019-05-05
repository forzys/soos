import React from 'react';
import { createAppContainer,createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

import FunTab from '../pages/fun/index'
import HomeTab from '../pages/home/index'
import MineTab from '../pages/mine/index'
import DiscountTab from '../pages/discount/index'
import CommunityTab from '../pages/community/index'

// 配置导航
const navigator = {
    Home: {
        screen: HomeTab,
        navigationOptions: () => ({
        tabBarLabel: '首页',
        tabBarIcon:(obj)=>(<Icon name="home" size={25} color={obj.tintColor} />)
        }),
    },
    Fun: {
        screen: FunTab,
        navigationOptions: () => ({
        tabBarLabel: '娱乐',
        tabBarIcon:(obj)=>(<Icon name="heart-o" size={25} color={obj.tintColor} />)
        })
    },
    Discount:{
        screen: DiscountTab,
        navigationOptions: () => ({
        tabBarLabel: '优惠',
        tabBarIcon:(obj)=>(<Icon name="star-o" size={25} color={obj.tintColor} />)
        })
    },
    Community:{
        screen: CommunityTab,
        navigationOptions: () => ({
        tabBarLabel: '社区',
        tabBarIcon:(obj)=>(<Icon name="comments-o" size={25} color={obj.tintColor} />)
        })
    },
    Mine:{
        screen: MineTab,
        navigationOptions: () => ({
        tabBarLabel: '我的',
        tabBarIcon:(obj)=>(<Icon name="user-o" size={25}  color={obj.tintColor} />)
        })
    }
}
// 配置导航设置
const setting = {
    lazy: true,//懒加载
    swipeEnabled: true,//滑动切换
    tabBarPosition: 'bottom',//tab bar的位置
    initialRouteName: 'Home',//默认router
    pressOpacity: 0.7,

    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#EEC591',
        inactiveTintColor:'#C5C1AA',
        style: {
            paddingTop:1,
            paddingBottom: 1,
            borderTopWidth:0.34,
            borderTopColor:'#eee',
            backgroundColor: '#fff',
        },
        labelStyle: {
            fontSize: 10, 
            fontWeight:'100',
        },
        indicatorStyle: { 
            height: 0,
         },
        // activeBackgroundColor:'teal',//整个活动标签的背景色
    },
}

const container = createBottomTabNavigator(navigator,setting)
// 创建导航器
const CreateTab = createAppContainer(container)

export default CreateTab