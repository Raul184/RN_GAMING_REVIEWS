import React from 'react'
import {View,Text} from 'react-native'
import {stylesGlobal} from '../styles/global.js';
const Home = () => {
  return (
    <View style={stylesGlobal.container}>
      <Text style={stylesGlobal.headings}>Home Screen</Text>
    </View>
  )
}

export default Home;