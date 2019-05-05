
import React, { Component } from 'react';
import { ToastAndroid,BackHandler } from 'react-native';
import CreateTab from './config/navigator';
// import JPushModule from 'jpush-react-native'


class RootMain extends Component {

    componentDidMount(){
        // JPushModule.initPush()
        // JPushModule.addReceiveNotificationListener((message) => {})
        this.backHandler = BackHandler.addEventListener('hardwareBackPress',     
        this.onBackButtonPressAndroid);
    }
    componentWillUnmount() {
        this.backHandler&&this.backHandler.remove();
        // JPushModule.removeReceiveNotificationListener();
    }
    
    onBackButtonPressAndroid(){
        //最近2秒内按过back键，可以退出应用。
        if ( this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) return false;
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT); 
        return true;
    }
    render() {
        return (
            <CreateTab />
        );
      }
}
export default RootMain
