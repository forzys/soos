
import React, { Component } from 'react';
import { View,Text,TouchableNativeFeedback,TextInput,Image,ImageBackground,FlatList,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Fetch from '../../config/fetch'
import API from '../../config/apis';

// search/wallpaper/resource/${word}?limit=${limit*30}&skip=${skip}&adult=false&first=0&order=${order}
class Wallpaper extends Component {

    constructor(props){
        super(props);
        this.state = {
            skip: 0,
            order:'',
            search:false,
            categoryId:'',
            newList:[],//history
            hotList:[],//history
            imgList:[],//render
            categoryList:[],
        }
    }

    //初始化获取数据
    componentDidMount(){
        this.getOrderList(0,'new')
    }

    //选择类别
    getOrderList= (sp,od)=>{
        const { order } = this.state
        if(od===order){
            return
        }
        const i = `${od}List`
        const onOff = this.state[i].length? true: false
        this.setState({
            skip: sp,
            order: od,
            imgList: onOff?this.state[i]:[]
        },()=>{
            const url = `vertical/${od=='category'?'category':'vertical'}?limit=30&skip=${sp}&adult=false&first=0&order=${od}`
            !onOff? this.getList(url): null
        })
    }

    //分类点击
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

    //搜索
    searchList=()=>{
        const {text} = this.state
        this.setState({
            imgList:[]
        },()=>{
            const url = `search/wallpaper/resource/${text}?limit=30&skip=0&adult=false&first=0&order=`
            this.getList(url,'search')
        })
    }

    //获取数据函数
    getList = (url,api='wall') => {
        Fetch(API.wallpaper[api] + url).then(res=>{
            const { order, imgList } = this.state
            let arr = []
            const list = imgList
            const i = order=='category' ? 3: 2
            const resList =  res && res.res && res.res.vertical ||  res.res.category || res.res.wallpaper || []
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
            console.error('err',API.wallpaper[api] + url,err)
        })
    }

    //更新render--ImgList
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
                                 <TouchableNativeFeedback key={order+index+1} onPress={()=>{this.getCategoryImgList(res.id)}}>
                                  <View style={{width:`${Math.floor(100/data.length)-3}%`,height:Math.floor(100/data.length)*10-70,margin:5,}}>
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
        const { imgList,search } = this.state
        return (
            <View style={{width:'100%',flex:1,alignItems:'center'}}>
                {
                    !search
                    ?<View style={{width:'50%',flexDirection:'row',justifyContent:'space-around',padding:10}}>
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
                            <Icon name="search" size={25}  onPress={()=>{this.setState({search:true})}} />
                        </TouchableNativeFeedback>
                    </View>
                    :<View style={{width:'40%',flexDirection:'row',padding:10}}>
                        <TextInput 
                            placeholder="输入 关键字 搜索"
                            placeholderTextColor="#ccc"
                            style={{width:'100%',borderBottomWidth:1,borderBottomColor:'#ccc',paddingBottom:3}}
                            spellCheck={ false }
                            autoFocus={ true }
                            maxLength = { 20 }
                            returnKeyType="search"
                            selectTextOnFocus={ true }
                            onChangeText={(text)=>{this.setState({text})}}
                            onSubmitEditing={ this.searchList }
                            onBlur={()=>{ this.setState({search:false}) }}
                        />
                    </View>
                }
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
