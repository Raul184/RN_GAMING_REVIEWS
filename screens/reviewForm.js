import React from 'react'
import {View,StyleSheet,Button,TextInput,Text} from 'react-native'
import {stylesGlobal} from '../styles/global.js'
import {Formik} from 'formik'

const ReviewForm = ({addReview}) => {
  return (
    <View style={stylesGlobal.container}>
      <Formik
        initialValues={{title:'',body:'',rating:''}}
        onSubmit={(values, actions) => {
          actions.resetForm()
          addReview(values)}
        }
      >
        {props => <View>
          <TextInput
            style={stylesGlobal.input}
            placeholder={'title'}
            onChangeText={props.handleChange('title')}
            value={props.values.title}
          />
          <TextInput
            style={stylesGlobal.input}
            placeholder={'review'}
            onChangeText={props.handleChange('body')}
            value={props.values.body}
          />
          <TextInput
            style={stylesGlobal.input}
            placeholder={'rating 1-5'}
            onChangeText={props.handleChange('rating')}
            value={props.values.rating}
            keyboardType='numeric'
          />
          <Button title='Submit' color='maroon' onPress={props.handleSubmit}/>
        </View>
      }</Formik>
    </View>
  )
}

export default ReviewForm;