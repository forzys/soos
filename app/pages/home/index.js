
import React, { Component } from 'react';
import { View,Text } from 'react-native';
import Fetch from '../../config/fetch'

import News from '../news/index'

// import {  homeStyle as styles} from '../../config/styles'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {SwipeList,SwipeRow} from '../../compontents/index'

class Home extends Component {
    componentDidMount(){
        // console.warn('err',Fetch)
        // Fetch('https://www.apiopen.top/journalismApi').then((res)=>{
        //     console.warn('res',res)
        // }).catch(err=>{
        //     console.warn('err',err)
        //     console.log('sdf')
        // })
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