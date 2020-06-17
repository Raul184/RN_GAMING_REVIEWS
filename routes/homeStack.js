import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  // default screen
  Home: {
    screen: Home
  },
  ReviewDetails: {
    screen: ReviewDetails
  }
}

// Stack Navigation
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);