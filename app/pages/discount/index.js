
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
            <View style={{width:'100%',margin:5,display:'flex',flexDirection:'row'}}>
                <View style={{flex:5}}>
                    <Image style={{width:100,height:150,padding:5,borderRadius:6}} source={{uri: data.img}} />
                </View>
                <View style={{flex:14,display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <Text numberOfLines={1} style={{fontSize:16,color:'#333',margin:5,}}>{data.title}</Text>
                    <Text>{data.cat} / {data.author}</Text>
                    <Text>最新：{data.lastChapter}</Text>
                    <Text numberOfLines={2} style={{display:'flex',fontSize:12,color:'#333'}}>{data.info}</Text>
                 </View>
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
                            placeholder="输入 关键字 搜索"
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
