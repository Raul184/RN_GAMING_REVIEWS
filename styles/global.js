import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    position:'relative'
  },
  headings: {
    fontFamily:'monospace',
    fontSize:18,
    color:'#333'
  },
  paragraph:{
    marginVertical:8,
    lineHeight:20
  },
  input:{
    fontFamily:'monospace',
    fontSize:10,
    borderWidth:1,
    borderColor:'#ddd',
    padding:10,
    marginVertical:5,
    fontSize:18,
    borderRadius:6,
  },
  errorText:{
    color:'crimson',
    fontWeight:'bold',
    marginBottom:10,
    marginTop:6,
    textAlign:'center',
    fontFamily:'monospace',
    fontSize:18,
  }
})

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
}