import React from 'react'
import {View,Text} from 'react-native'
import {stylesGlobal} from '../styles/global.js';
const ReviewDetails = ({navigation}) => {
  return (
    <View style={stylesGlobal.container}>
      <Text>{navigation.getParam('title')}</Text>
      <Text>{navigation.getParam('body')}</Text>
      <Text>{navigation.getParam('rating')}</Text>
    </View>
  )
}

export default ReviewDetails;