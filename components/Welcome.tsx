import { View, Text } from 'react-native'
import React from 'react'

const Welcome = (props) => {
  return (
    <View>
      <Text style={{marginTop:50, padding:50, color:"tomato", fontWeight:"bold",fontSize:25}}>Welcome {props.name}</Text>
      <Text style={{marginTop:50, padding:50, color:"tomato", fontWeight:"bold",fontSize:25}}>Age {props.age}</Text>
    </View>
  )
}

export default Welcome