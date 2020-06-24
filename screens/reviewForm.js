import React from 'react'
import {View,Button,TextInput,Text} from 'react-native'
import {stylesGlobal} from '../styles/global.js'
import {Formik} from 'formik'
import * as yup from 'yup'

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup.string().required().test(
    'a num 1 - 5','Rating must be from 1 to 5', val => {
      return parseInt(val) < 6 && parseInt(val) > 0
    }
  )
})
const ReviewForm = ({addReview}) => {
  return (
    <View style={stylesGlobal.container}>
      <Formik
        initialValues={{title:'',body:'',rating:''}}
        validationSchema={reviewSchema}
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