import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {stylesGlobal , images} from '../styles/global.js';
import Card from '../shared/Card'

const ReviewDetails = ({navigation}) => {
  const rating = navigation.getParam('rating')
  return (
    <View style={stylesGlobal.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.ratings}>
          <Text>Rating:</Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  ratings:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee'
  }
})
export default ReviewDetails;