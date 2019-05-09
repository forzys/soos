
import React, { Component } from 'react';
import { View,Text ,Alert,TouchableNativeFeedback} from 'react-native';
import {WebView}   from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fetch from '../../config/fetch'
import ZhiHu from './zhihu'
import API from '../../config/apis'

class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { isActive, body, css, title } = this.state
        return (
            <View>
                <View style={!!isActive?{width:'100%',height:'100%'}:{width:0,height:0}}>
                    <ViewHTML body={body} css={css} title={title} />
                </View>
                <View style={!isActive?{width:'100%',height:'100%'}:{width:0,height:0}}>
                    <ZhiHu isShow={this.isActiveShow} />
                </View>
            </View>
        );
      }
}

export default News
