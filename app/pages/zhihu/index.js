
import React, { Component } from 'react';
import { View,Text,Image,TouchableNativeFeedback } from 'react-native'
import {SwipeList} from '../../compontents/index'
import Fetch from '../../config/fetch'
import {date} from '../../config/static'
import { swipeListStyle } from '../../config/styles'
import API from '../../config/apis'


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
    getMore =()=>{
        const {i,days} = this.state
        const day = new date().getBeforeDay(i).Format('yyyyMMdd')
        days.push(day)
        this.setState({
            days,
            i:i+1
        },()=>{ 
            this.getData(days,day)
        })
    }
    getData =(days,day)=>{
        const list = this.state.list
        Fetch( API.zhihu.oldNew + day ).then(res=>{
            const arr = []
            Array.isArray(res.stories) &&
            res.stories.forEach(item=> { //遍历数据
                arr.push({//临时数组
                    id:item.id,
                    key:list.length+''+arr.length+1+'',
                    title:item.title,
                    image:item.images[0],
                })
            })
            list.push({ //生成list
                title:day,
                data:arr,
            })
            //获取数据结束
            if(list.length == days.length){ 
                list.sort((a,b)=>{ //排序
                    let re = 0
                    a.title >b.title ? re= -1 : a.title< b.title? re =1: re=0
                    return re
                })
                this.setState({//保存
                    days,list,
                }) 
            }
        }).catch(err=>{
            this.setState({ list:[] })
        })
    }
    getList = ()=>{
        const { i, days } = this.state
        //获取日期
        Array(i).fill('').forEach((res,index)=>{
            days.push(new date().getBeforeDay(index).Format('yyyyMMdd'))
        })
        //遍历日期获取数据
        days.forEach( day => {
            this.getData(days,day)
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
                    
                    // 分组信息
                    renderSectionHeader={(info)=>(
                        <View style={{marginTop:5,padding:15,}}>
                            <Text>{info.section.title}</Text>
                        </View>
                    )}
                    // 滑动显示隐藏的按钮
                    renderHiddenItem={ (data, rowMap) => (
                        <View style={swipeListStyle.RowBack}>
                            <Text></Text>
                            <Text>收藏</Text>
                        </View>
                    )}
                    //footer
                    ListFooterComponent={()=>{
                        const list = this.state.list || []
                        const Footer= list.length ?
                        <View style={{marginBottom:90,marginTop:10}}>
                                <Text style={{textAlign:'center',color:'#ddd'}}>
                                    到底了 ,要不
                                    <Text style={{color:'#71C671'}} onPress={()=>{this.getMore()}}>
                                        再来一天
                                    </Text>
                                </Text>
                        </View> : (this.state.footer || null)
                        return Footer
                    }}
                    // item
                    renderItem={ (data) => (
                        <TouchableNativeFeedback
                            onPress={()=>{this.props.isShow(data.item.id)}}
                            background={TouchableNativeFeedback.SelectableBackground()}
                        >
                            <View style={swipeListStyle.RowFront}>
                                 <Image
                                    style={swipeListStyle.RowImg}
                                    source={{uri: data.item.image}}
                                />
                                <Text>{data.item.title}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )}
                />
            </View>
        );
      }
}

export default zhihuNews
