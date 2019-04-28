

import { StyleSheet } from 'react-native'

//首页样式
const homeStyle = function(){
    const s = {}
    s.test={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'red'
    }
    return StyleSheet.create(s)
}()

//fun
const funStyle = function(){
    const s = {}

    return StyleSheet.create(s)
}()

//mine
const mineStyle = function(){
    const s = {}
    

    return StyleSheet.create(s)
}()

//community
const communityStyle = function(){
    const s = {}
    

    return StyleSheet.create(s)
}()

//discount
const  discountStyle = function(){
    const s = {}
    

    return StyleSheet.create(s)
}()

export {
    homeStyle,
    funStyle,
    mineStyle,
    communityStyle,
    discountStyle,
}