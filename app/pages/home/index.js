
import React, { Component } from 'react';
import { View,Text } from 'react-native';
import {  homeStyle as styles} from '../../config/styles'
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {

    componentDidMount(){
       console.warn('home')

    }

    render() {
        return (
            <View>
                
                <Text style={styles.test}>
                    Home
                </Text>
                <View>
                    <Icon name="home" size={25}  color="#900" /> 
                </View>

            </View>
        );
      }
}
export default Home