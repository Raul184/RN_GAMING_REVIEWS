import React from 'react'
import {View,Text} from 'react-native'
import {stylesGlobal} from '../styles/global.js';
import Card from '../shared/Card'
const ReviewDetails = ({navigation}) => {
  return (
    <View style={stylesGlobal.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <Text>{navigation.getParam('rating')}</Text>
      </Card>
    </View>
  )
}

export default ReviewDetails;