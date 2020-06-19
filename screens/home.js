import React from 'react'
import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import {stylesGlobal} from '../styles/global.js';
import { useState } from 'react';

const Home = ({navigation}) => {
  const [reviews , setReviews] = useState([
    {title: 'Zelda', rating:5, body:'Lorem ipsum dolor sit amet.', key:'1'},
    {title: 'Pokemon', rating:4, body:'Lorem ipsum dolor sit amet.', key:'2'},
    {title: 'Final Fantasy', rating:3, body:'Lorem ipsum dolor sit amet.', key:'3'}
  ])
  return (
    <View style={stylesGlobal.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity 
            onPress={
              () => navigation.navigate('ReviewDetails', item)
            }
          >
            <Text style={stylesGlobal.headings}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home;