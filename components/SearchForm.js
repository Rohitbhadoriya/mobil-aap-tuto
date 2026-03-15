


import { StyleSheet, Text, View , Button,TextInput} from 'react-native'
import React, { useState } from 'react'



const SearchForm = ({onSearch}) => {
    const [searchTerm, setsearchTerm] = useState('')
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='Location Search (e.g. Nagpur)'
        value={searchTerm}
        onChangeText={setsearchTerm}
        
        />
        <Button
        title="Search"
        onPress={()=>onSearch(searchTerm)}
        color = "#3498db"
        
        />
     
    </View>
  )
}

export default SearchForm

const styles = StyleSheet.create({
container:{
    flexDirection:"row",
    padding:12,
    backgroundColor:"#f8f9fa"
},
input:{
    flex:1,
    borderWidth:1,
    borderColor:"pink",
    padding:10,
    borderRadius:12,
    marginRight:10

}


})