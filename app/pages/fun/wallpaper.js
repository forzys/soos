
import React, { Component } from 'react';
import { View,Text,TouchableNativeFeedback,TextInput,Image,ImageBackground,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Fetch from '../../config/fetch'
import API from '../../config/apis';
class Wallpaper extends Component {
    constructor(props){
        super(props);
        this.state = {
            skip: 0,
            order:'',
            categoryId:'',
            newList:[],//history
            hotList:[],//history
            imgList:[],//render
            categoryList:[],
        }
    }
    componentDidMount(){
        this.getOrderList(0,'new')
    }
    getOrderList= (sp,od,category)=>{
        const { order } = this.state
        const i = `${od}List`
        const onOff = this.state[i].length? true: false
        if(od===order){
            return
        }
        !! onOff 
        ? this.setState({
            skip: sp,
            order: od,
            imgList: this.state[i]
        })
        : this.setState({
            skip: sp,
            order: od,
            imgList: []
        },()=>{
            const url = `vertical/${od=='category'?'category':'vertical'}?limit=30&skip=${sp}&adult=false&first=0&order=${od}`
            this.getList(url)
        })
    }
    getCategoryImgList=(id,sp)=>{
        const { categoryId, skip} = this.state
        this.setState({
            order: '',
            imgList:[],
            skip:sp?sp:skip,
            categoryId:id||categoryId,
        },()=>{
            const url = `vertical/category/${this.state.categoryId}/vertical?
                limit=30&skip=${this.state.skip}&adult=false&first=0&order=`
            this.getList(url)
        })
    }
    getList = (url) => {
        Fetch(API.wallpaper.wall + url).then(res=>{
            let arr = []
            const list = imgList
            //最新最热 + 类别
            const resList =  res && res.res && res.res.vertical ||  res.res.category || []
            const i = this.state.order=='category' ? 3: 2

            resList.forEach((ele,index)=>{
                arr.push({
                    key:arr.length+1,
                    id: ele.id,
                    wp: ele.wp||'',
                    img: ele.img||ele.cover,
                    name: ele.name? ele.name:''
                })
                if(( index + 1 )%i === 0){
                    list.push({
                        data:arr,
                        key:order+list.length+1
                    })
                    arr = []
                }
            })

            const store = {}
            store.imgList = list
            store[`${order}List`] = list
            this.setState(list)

        }).catch(err=>{
            console.warn('err')
        })
    }
    ImgList= (list)=>{
        const data = list.item.data
        const order = this.state.order
        return (
            <View style={{width:'100%',flexDirection:'row',padding:5,justifyContent:'center'}}>
                {
                    data.length &&
                    data.map((res,index)=>{
                        if(res.name){
                            return(
                                 <TouchableNativeFeedback onPress={()=>{this.getCategoryImgList(res.id)}}>
                                  <View key={order+index+1} style={{width:`${Math.floor(100/data.length)-3}%`,height:Math.floor(100/data.length)*10-70,margin:5,}}>
                                        <ImageBackground style={{width:'100%',height:'100%',borderRadius:5}} source={{uri: res.img}}>
                                            <Text style={{position:'absolute',bottom:0,height:50,lineHeight:50,textAlign:'center',width:'100%',backgroundColor:'rgba(122,122,122,.3)'}}>{res.name}</Text>
                                        </ImageBackground>
                                    </View>
                                 </TouchableNativeFeedback>
                            )
                        }else{
                            return(
                                <Image key={order+index+1} style={{width:`${Math.floor(100/data.length)-3}%`, height:Math.floor(100/data.length)*10-70, margin:5,borderRadius:5}} source={{uri: res.img}} />
                            )
                        }
                    })
                }
            </View>
        )
    }
    render() {
        const { active, imgList } = this.state
        return (
            <View style={{width:'100%',flex:1,alignItems:'center'}}>
                <View style={{width:'50%',flexDirection:'row',justifyContent:'space-around',padding:10}}>
                    <TouchableNativeFeedback onPress={()=>{this.getOrderList(0,'new')}}>
                        <Text>最新</Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>{this.getOrderList(0,'hot')}}>
                        <Text>最热</Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>{this.getOrderList(0,'category')}}>
                        <Text>分类</Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback >
                        <Icon name="search" size={25}  />
                    </TouchableNativeFeedback>
                </View>
                <View>

                </View>

                <View>
                    <FlatList
                        style={{marginBottom:50}}
                        data={imgList}
                        renderItem={this.ImgList}
                        ref={list=>this._scrollView=list}
                    />
                </View>

            </View>
        );
      }
}
export default Wallpaper
