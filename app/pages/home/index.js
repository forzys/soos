
import React, { Component } from 'react';
import { View,Text,ToastAndroid } from 'react-native';
import NetInfo from '@react-native-community/netinfo'
import Fetch from '../../config/fetch'
import News from '../news/index'

// import {  homeStyle as styles} from '../../config/styles'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {SwipeList,SwipeRow} from '../../compontents/index'

class Home extends Component {

    componentDidMount(){
        const netStatusChange =( status ) => {
            // ToastAndroid.show('网络波动',ToastAndroid.SHORT)
            if(status.type=='none'){
                ToastAndroid.show("网络连接出错", ToastAndroid.LONG);
                NetInfo.removeEventListener('connectionChange',netStatusChange)
            }
        }
        NetInfo.addEventListener('connectionChange',netStatusChange);
    }
    render() {
        return (
            <View>
                <News />
            </View>
        );
      }
}
export default Home