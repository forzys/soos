
import React, { Component } from 'react';
import { View,Text,Image } from 'react-native';
import {SwipeList} from '../../compontents/index'
import Fetch from '../../config/fetch'
import {date} from '../../config/static'
import {swipeListStyle} from '../../config/styles'
import API from '../../config/apis'

const data = new date()

class zhihuNews extends Component{
    constructor(props) {
        super(props);
        this.state = {
            i: 5,
            list: [],
            days: [],
        };
    }
    componentDidMount(){
        this.getList()
    }
    getList = async()=>{
        const { i, t, list, days } = this.state
        //排序
        const sequence= (a,b)=>{
            if(a.title>b.title){
                return -1
            }else if(a.title<b.title){
                return 1
            }else{
                return 0
            }
        }
        //获取日期
        Array(i).fill('').forEach((res,index)=>{
            days.push(new date().getBeforeDay(index).Format('yyyyMMdd'))
        })
        //遍历日期获取数据
        days.forEach( day =>{
            Fetch( API.zhihu.oldNew + day )
            .then(res=>{
                const arr = []
                //遍历数据
                Array.isArray(res.stories) &&
                res.stories.forEach(item=> {
                    //临时数组
                    arr.push({
                        id:item.id,
                        key:list.length+''+arr.length+1+'',
                        title:item.title,
                        image:item.images[0],
                    })
                })
                //生成list
                list.push({
                    title:day,
                    data:arr,
                })
                //获取数据结束
                if(list.length == days.length){
                    //排序
                    list.sort(sequence)
                    //保存
                    this.setState({list})
                }
            }).catch(err=>{
                this.setState({ list:[] })
            })
        })
    }

    render() {
        return (
            <View>
                <Text style={{padding:15,margin:10}}>
                    知乎日报 
                </Text>
               <SwipeList
                    useSectionList
                    disableRightSwipe
                    stopRightSwipe={-150}
                    rightOpenValue={-75}
                    sections={this.state.list}
                    renderSectionHeader={(info)=>(
                            <View style={{marginTop:5,padding:15,}}>
                                <Text>{info.section.title}</Text>
                            </View>
                    )}
                    renderItem={ (data) => (
                            <View style={swipeListStyle.RowFront}>
                                 <Image
                                    style={{width: 50, height: 50,borderRadius:6,marginRight:10}}
                                    source={{uri: data.item.image}}
                                />
                                <Text>{data.item.title}</Text>
                            </View>
                    )}
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={swipeListStyle.RowBack}>
                            <Text></Text>
                            <Text>收藏</Text>
                        </View>
                    )}
                    ListFooterComponent={()=>(
                        <View style={{marginBottom:150,marginTop:10,}}>
                            <Text style={{textAlign:'center',color:'#ddd'}}>到底了</Text>
                        </View>
                    )}
                />
            </View>
        );
      }
}

export default zhihuNews
