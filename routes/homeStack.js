import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/Header';
import React from 'react';

const screens = {
  // default screen
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Gaming_Zone'/>
      }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Details'
    }
  }
}

// Stack Navigation
const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerStyle: {
      headerTintColor:'#444',
      backgroundColor: '#cee',
      height:60,
      flexDirecion:'row',
      alignItems:'center',
      justifyContent:'space-evenly'
    }
  }
});

export default createAppContainer(HomeStack);