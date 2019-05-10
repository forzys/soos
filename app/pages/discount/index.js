
import React, { Component } from 'react';
import { View,Text,TextInput ,FlatList, Image} from 'react-native';
import Fetch from '../../config/fetch'
import API from '../../config/apis'

class Discount extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            name: '',
            nList:[],
        }
    }
    searchBook =()=>{
        const { name, nList } = this.state
        if(!name){
            this.setState({
                nList:[],
                count:0,
            })
            return
        }
        Fetch({url:API.book.search+name}).then(res=>{
            const list = nList || []
            res &&
            res.books.length&&
            res.books.forEach(ele=> {
                list.push({
                    key:'novel'+list.length+1,
                    id:ele._id,
                    author:ele.author||'未知',
                    cat:ele.cat||'未知',
                    img:unescape(ele.cover.replace('/agent/',''))||'',
                    lastChapter:ele.lastChapter||'',
                    info:ele.shortIntro||'',
                    title:ele.title||'暂无',
                    word:ele.wordCount||0
                })
            });
            this.setState({
                nList:list,
                count:res.total
            })
        }).catch(err=>{
            console.warn(err)
        })
    }
    NovelList=(list)=>{
        const data = list.item
        return(
            <View style={{width:'100%',display:'flex',flexDirection:'row'}}>
                <Image style={{width:50,height:50}} source={{uri: data.img}} />
                <Text>{data.title}</Text>
            </View>
        )
    }
    render() {
        const {nList} = this.state
        return (
            <View>
                <View style={{marginTop:10,alignItems:'center',}}>
                    <Text>Search & 小说</Text>
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
                            onChangeText={(name)=>{this.setState({name})}}
                            onSubmitEditing={ this.searchBook }
                        />
                    </View>
                </View>

                <View style={{width:'100%',marginTop:10}}>
                    <FlatList
                        style={{marginBottom:50}}
                        data={nList}
                        renderItem={this.NovelList}
                        ref={list=>this._scrollView=list}
                    />
                </View>
            </View>
        );
      }
}
export default Discount
