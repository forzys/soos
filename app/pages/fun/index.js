
import React, { Component } from 'react';
import { View,Text,TouchableNativeFeedback } from 'react-native';

import Music from "./music";
import Novel from "./novel";
import Wallpaper from "./wallpaper";

const temp = [
    {
        key: 1,
        name:Music,
        title: 'M 音乐',
        
    },
    {
        key: 2,
        name: Novel,
        title: 'N 小说',
    },
    {
        key: 3,
        title: 'M 电影',
        name:Music,
    },
    {
        key: 4,
        title: 'W 壁纸',
        name:Wallpaper,
    },
]
class Fun extends Component {
    constructor(props){
        super(props)
        this.state={
            active:0,
        }
    }
    setActive =(key)=>{
        this.setState({
            active:this.state.active==key?key:0
        })
    }
    render() {
        const { active } = this.state
        return (
            <View style={{marginTop:5}}>
                {
                    temp.map( res => (
                        <TouchableNativeFeedback key={res.key}
                        onPress={()=>{this.setState({active:res.key==active?0:res.key})}}>
                            <Text style={{fontSize:17, margin:5, borderRadius:3, borderWidth:1,borderColor:'#eee', textAlign:'center',padding:10}}> {res.title} </Text>
                        </TouchableNativeFeedback>
                    ))
                }
                <View>
                    <Text>hello</Text>
                </View>
            </View>
        );
      }
}
export default Fun
