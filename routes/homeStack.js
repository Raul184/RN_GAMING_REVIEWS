import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  // default screen
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GaminZone'
      // headerStyle: {
      //   backgroundColor: '#cee'
      // }
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Details'
      // headerStyle: {
      //   backgroundColor: '#cee'
      // }
    }
  }
}

// Stack Navigation
const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerStyle: {
      headerTintColor:'#444',
      backgroundColor: '#cee',
      height:60
    }
  }
});

export default createAppContainer(HomeStack);