import React , {useEffect} from 'react';
import Navigator from './routes/drawer'
import * as Font from 'expo-font'
export default function App() {
  useEffect(() => Font.loadAsync({
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
  ,[])
  return (
    <Navigator />
  );
}

