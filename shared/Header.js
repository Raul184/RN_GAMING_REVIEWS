import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const Header = ({navigation , title}) => {
  const toogleMenu = () => {
    navigation.openDrawer()
  }
  return <View style={styles.customHeader}>
    <MaterialIcons name='menu'
      size={28}
      onPress={toogleMenu}
      style={styles.icon}
    />
    <View>
      <Text style={styles.customText}>{title}</Text>
    </View>
  </View>
}


const styles = StyleSheet.create({
  customHeader:{
    width:'100%',
    height:'100%',
    flexDirecion:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    position:'absolute',
    left:8
  },
  customText:{
    fontWeight:'bold',
    fontSize: 20,
    color:'#444',
    letterSpacing:1
  }
})

export default Header;