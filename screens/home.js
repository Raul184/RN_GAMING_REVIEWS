import React from 'react'
import {View,Text,FlatList,TouchableOpacity,Modal,StyleSheet} from 'react-native'
import {stylesGlobal} from '../styles/global.js';
import { useState } from 'react';
import {MaterialIcons} from '@expo/vector-icons'
import Card from '../shared/Card';
import ReviewForm from './reviewForm'
const Home = ({navigation}) => {
  const [toogleModal, setToogle] = useState(false)
  const [reviews , setReviews] = useState([
    {title: 'Zelda', rating:5, body:'Lorem ipsum dolor sit amet.', key:'1'},
    {title: 'Pokemon', rating:4, body:'Lorem ipsum dolor sit amet.', key:'2'},
    {title: 'Final Fantasy', rating:3, body:'Lorem ipsum dolor sit amet.', key:'3'}
  ])
  return (
    <View style={stylesGlobal.container}>
      <Modal visible={toogleModal} animationType='slide'>
        <View style={stylesGlobal.modalContent}>
          <MaterialIcons 
          name='close' 
          size={24}
          onPress={() => setToogle(true)} 
          style={{...styles.add,...styles.close}}
          />
          <ReviewForm />
        </View>
      </Modal>
      <MaterialIcons 
        name='add' 
        size={24}
        onPress={() => setToogle(true)} 
        style={styles.add}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={stylesGlobal.headings}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent:{
    flex:1
  },
  add:{
    marginBottom:10,
    borderWith:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  close:{
    marginTop:20,
    marginBottom:0
  }
})
export default Home;