import React from 'react'
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native'

const FlatButton = ({text,onPress}) => <TouchableOpacity onPress={onPress}>
  <View style={styles.btn}>
    <Text style={styles.btnText}>{text}</Text>
  </View>
</TouchableOpacity>
  


const styles = StyleSheet.create({
  btn:{
    borderRadius:8,
    paddingVertical:26,
    backgroundColor:'#f01d71'
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center'
  }
})

export default FlatButton;