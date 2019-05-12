
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
            title:'',
        };
    }
    isZhihuShow = ( id )=>{
        Fetch({url:API.zhihu.getNew+ id}).then(res=>{
            if(res){
                this.setState({
                    style:'',
                    isActive:true,
                    body: res.body,
                    title:res.title,
                    css:res.css?res.css[0]:'',
                })
            }
        }).catch(err=>{
            console.error(err)
        })
    }
    isArticleShow=()=>{
        Fetch({
            url:API.article.today,
            heade:{'user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36'}
        }).then(res=>{
            const body = `
            <h2 style="text-align:center">${res.data.title}</h2>
            <p style="text-align:center">${res.data.author}</p>
            ${res.data.content}`
            res&&
            res.data&&
            this.setState({
                css: '',
                body,
                isActive: true,
                title: res.data.title,
            })
        }).catch(err=>{
            console.warn('err',err)
        })
    }
    render() {
        const { isActive, body, css, title } = this.state
        return (
            <View>
                <View style={!!isActive?{width:'100%',height:'100%'}:{width:0,height:0}}>
                    <ViewHTML 
                        body={body} 
                        css={css} 
                        title={title}
                        back={()=>{this.setState({isActive:false})}} 
                    />
                </View>

                <View style={!isActive?{width:'100%',height:'100%'}:{width:0,height:0}}>
                    <View style={{display:'flex',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#fff'}}>
                        <TouchableNativeFeedback>
                            <Text style={{padding:15,margin:10}}>
                                知乎日报 
                            </Text>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={this.isArticleShow}>
                            <Text style={{padding:15,margin:10}}>
                                每日一文 
                            </Text>
                        </TouchableNativeFeedback>
                    </View>
                    <ZhiHu isShow={this.isZhihuShow} />
                </View>
            </View>
        );
      }
}

export default News
