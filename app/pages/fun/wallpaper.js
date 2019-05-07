
import React, { Component } from 'react';
import { View,Text,TouchableNativeFeedback,TextInput,Image,FlatList} from 'react-native';
import Fetch from '../../config/fetch'
import API from '../../config/apis';


class Wallpaper extends Component {
    constructor(props){
        super(props);
        this.state = {
            skip: 0,
            order:'hot',
            newList:[],//history
            hotList:[],//history
            imgList:[],//render
        }
    }
    componentDidMount(){
        this.getNewList()
    }
    getNewList =()=>{
        const { skip, order,newList } = this.state
        const url =`vertical/vertical?limit=30&skip=${skip}&adult=false&first=0&order=${order}`
        // console.error(API.wallpaper.wall + url)

        Fetch(API.wallpaper.wall + url).then(res=>{
            // console.warn(res.res.vertical)
            let arr = []
            res&&res.res&&
            res.res.vertical&&
            res.res.vertical.forEach((ele,index)=>{
                arr.push({
                    id:ele.id,
                    img:ele.img,
                    wp: ele.wp,
                })
                if((index+1)%2==0){
                    newList.push({
                        key:newList.length,
                        data:arr
                    })
                    arr = []
                }
            })
            this.setState({
                newList,
                imgList:newList,
            },()=>{
                console.warn(newList.length)
            })
            
        }).catch(err=>{
            console.warn('err')
        })
    }
    ImgList= (list)=>{
        const data = list.item.data
        return (
            <View style={{flexDirection:'row'}}>
                {
                    data.length &&
                    data.map(res=>( <Image style={{width:'50%',height:450,margin:5,borderRadius:5}} source={{uri: res.img}} /> ))
                }
            </View>
        )
    }
    render() {
        const { active,imgList } = this.state
        return (
            <View style={{width:'100%',flex:1}}>
                <View style={{margin:10,alignItems:'center',}}>
                    <Text style={{margin:3,fontSize:17,color:'#FFA07A'}}> 好看的壁纸 </Text>
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
                            onChangeText={(text)=>{this.setState({text})}}
                            onSubmitEditing={ this.getMusicList }
                        />
                    </View>
                </View>

                <View>
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                        <TouchableNativeFeedback>
                            <Text>最新</Text>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback >
                            <Text style={{marginLeft:5,marginRight:5}}>分类</Text>
                        </TouchableNativeFeedback>
                        {
                            active==3?
                            <TouchableNativeFeedback>
                                <Text>搜索</Text>
                            </TouchableNativeFeedback>
                            :null
                        }
                    </View>
                    <View>
                        <FlatList
                            data={imgList}
                            renderItem={this.ImgList}
                        />
                    </View>
                </View>
            </View>
        );
      }
}
export default Wallpaper
