import { StyleSheet } from 'react-native'
import { setSpText,scaleSizeH,scaleSizeW } from './autoAdp'

const swipeListStyle = function(){
    const s = {}
    s.RowFront= {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
		backgroundColor: '#fff',
        height: 70,
        padding:15,
        marginTop:5,
    }, 
    s.RowImg= {
        width: 50, 
        height: 50,
        borderRadius:6,
        marginRight:10
    }, 
    s.RowBack= {
		alignItems: 'center',
		backgroundColor: '#8BC645',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
        marginTop:5,
        padding:15,
    }
    return StyleSheet.create(s)
}()
//首页样式
const homeStyle = function(){
    const s = {}
    s.test={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'red'
    }
    s.standalone={
		marginTop: 30,
		marginBottom: 30,
    }
    s.standaloneRowBack= {
		alignItems: 'center',
		backgroundColor: '#8BC645',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15
	},
    s.backTextWhite= {
		color: '#FFF'
    },
    s.standaloneRowFront= {
		alignItems: 'center',
		backgroundColor: '#CCC',
		justifyContent: 'center',
		height: 50,
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
    swipeListStyle,
    homeStyle,
    funStyle,
    mineStyle,
    communityStyle,
    discountStyle,
}