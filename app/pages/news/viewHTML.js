import React, { Component } from 'react';
import { View,Text ,Alert,TouchableNativeFeedback} from 'react-native';
import {WebView}   from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';

const view = (props)=>{

    const body = `
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
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
                    onPress={props.back}>
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

export default view