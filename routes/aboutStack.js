import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/Header';
import React from 'react';

const screens = {
  // default screen
  About: {
    screen: About,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About Gaming'/>
      }
    }
  }
}

// Stack Navigation
const AboutStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor:'#444',
    headerStyle: {
      backgroundColor: '#cee',
      height:60
    }
  }
});

export default AboutStack;