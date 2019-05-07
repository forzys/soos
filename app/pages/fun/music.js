
import React, { Component } from 'react';
import { View,Text,TextInput,FlatList } from 'react-native';

import Fetch from '../../config/fetch'
import API from '../../config/apis';

class Music extends Component {
    constructor(props){
        super(props)
        this.state={
            text:'',
            list:[],
        }
    }

    getMusicList =()=>{
        const { text } = this.state
        // console.warn(API.music.search + text)

        // Fetch( API.music.search + text )
        // .then( res => {
            // const count = res.result.songCount
            // console.warn(res)
            // const list = []
            // res && res.result &&
            // res.result.songs.length &&
            // res.result.songs.forEach( ele => {
            //     console.warn(ele)
            //     // list.push({
            //     //     id: ele.id || '',
            //     //     mvid: ele.mvid ||'',
            //     //     name: ele.name || '未知',
            //     //     time: ele.duration || 0,
            //     //     key : '' + arr.length + 1,
            //     //     artists: ele.artists.length ? ele.artists[0].name:'未知'
            //     // })
            // });
            // this.setState({ list })
        // }).catch(err=>{
        //     console.warn('err',err)
        // })
        
    }

    render() {
        const {list} = this.state
        return (
            <View style={{width:'100%',flex:1}}>
                <View style={{marginTop:10,alignItems:'center',}}>
                    <Text>Search & Listen</Text>
                    <View>
                        <TextInput 
                            placeholder="输入 音乐名称 搜索"
                            placeholderTextColor="#ccc"
                            style={{ borderBottomWidth:1,borderBottomColor:'#ccc',paddingBottom:3}}
                            spellCheck={ false }
                            autoFocus={ true }
                            maxLength = { 20 }
                            returnKeyType="search"
                            selectTextOnFocus={ true }
                            onChangeText={(text)=>{this.setState({text})}}
                            onSubmitEditing={ this.getMusicList }
                        />
                    </View>
                </View>
                <View>

                <FlatList
                    data={list}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
                </View>
            </View>
           
        )
      }
}
export default Music
