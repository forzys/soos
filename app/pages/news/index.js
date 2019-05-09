
import React, { Component } from 'react';
import { View,Text,TouchableNativeFeedback} from 'react-native';
import ViewHTML from './viewHTML'
import Fetch from '../../config/fetch'
import ZhiHu from './zhihu'
import API from '../../config/apis'

class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive:false,
            body:'',
            css:'',
            title:''
        };
    }

    isActiveShow = ( id )=>{
        Fetch( API.zhihu.getNew+id).then(res=>{
            if(res){
                this.setState({
                    body:res.body,
                    title:res.title,
                    css:res.css?res.css[0]:'',
                    isActive:true,
                })
            }
        }).catch(err=>{
            console.error(err)
        })
    }
   
    getArticle= ()=>{
        // console.warn(API.article.today)
        // Fetch(API.article.today).then(res=>{
        //    console.warn(res)
        // }).catch(err=>{
        //     console.error(err)
        // })

        const url = `https://interface.meiriyiwen.com/article/today?dev=1`
        // const url = 'https://interface.meiriyiwen.com'
        // https://news-at.zhihu.com/api/4/news/latest
        // const url ='https://news-at.zhihu.com/api/4/news/latest'
        // fetch( url )
        // .then(res=>{
        //     console.warn(res.text())
        //     return res.json()})
        // .then(res=>{console.warn(res)})
        // .catch(err=>console.warn(err))
    }

    render() {
        const { isActive, body, css, title } = this.state

        return (
            <View>
                <View style={!!isActive?{width:'100%',height:'100%'}:{width:0,height:0}}>
                    <ViewHTML body={body} css={css} title={title} back={()=>{this.setState({isActive:false})}}/>
                </View>
                <View style={!isActive?{width:'100%',height:'100%'}:{width:0,height:0}}>
                    <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#fff'}}>
                        <TouchableNativeFeedback>
                            <Text style={{padding:15,margin:10}}>
                                知乎日报 
                            </Text>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.getArticle}>
                            <Text style={{padding:15,margin:10}}>
                                每日一文 
                            </Text>
                        </TouchableNativeFeedback>
                    </View>

                    <ZhiHu isShow={this.isActiveShow} />
                </View>
            </View>
        );
      }
}

export default News
