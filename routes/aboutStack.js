import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
  // default screen
  About: {
    screen: About,
    navigationOptions: {
      title: 'About'
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