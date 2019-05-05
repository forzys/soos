
import React, { Component } from 'react';
import { View,Text } from 'react-native';
import Fetch from '../../config/fetch'
import ZhiHu from '../zhihu/index'

class News extends Component{
    componentDidMount(){
        // Fetch('https://www.apiopen.top/journalismApi').then((res)=>{
        //     console.warn('res',res)
        // }).catch(err=>{
        //     console.warn('err',err)
        //     console.log('sdf')
        // })
    }
    getList = ()=>{
    }
    render() {
        return (
            <View>
               <ZhiHu />
            </View>
        );
      }
}

export default News
