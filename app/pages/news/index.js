
import React, { Component } from 'react';
import { View,Text ,Alert,TouchableNativeFeedback} from 'react-native';
import {WebView}   from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fetch from '../../config/fetch'
import ZhiHu from '../zhihu/index'
import API from '../../config/apis'



class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive:false,
            body:'',
            css:'',
            title:''
        };
    }
    isActiveShow = (id)=>{
        Fetch( API.zhihu.getNew+id).then(res=>{
            if(res){
                this.setState({
                    body:res.body,
                    title:res.title,
                    css:res.css?res.css[0]:'',
                    isActive:true,
                })
            }
        }).catch(err=>{
            console.error(err)
        })
    }
    viewHTML = (props)=>{
        const body = `
        <html>
            <head>
                <link rel="stylesheet" href="${props.css}"/>
            </head>
            <body>
                ${props.body}
            </body>
        </html>`
        return (
            <View style={{width:'100%',height:'100%'}}>
                <View style={{ margin:10,display:'flex',flexDirection:'row',}}>
                    <TouchableNativeFeedback style={{ textAlign:'left' }} 
                        onPress={()=>{this.setState({isActive:false})}}>
                        <Icon name="reply" size={25} color="#ccc" />
                    </TouchableNativeFeedback>
                    <Text numberOfLines={1} style={{width:'90%',paddingLeft:20,textAlign:'center',fontSize:18}}>
                        {props.title}
                    </Text>
                </View>
                <WebView
                    source={{ html:body, baseUrl:''}}//必须加baseUrl 否则在低版本的android系统会报错
                    // injectedJavaScript={BaseScript}//设置高度 被内容撑开
                    originWhitelist={['*']}
                    automaticallyAdjustContentInsets={false}
                    scalesPageToFit={false}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    decelerationRate="normal"
                    style={{width:'100%',height:'100%'}}
                />
            </View>
        )
    }
    render() {
        const { isActive, body, css, title } = this.state
        const ViewHTML = this.viewHTML
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
