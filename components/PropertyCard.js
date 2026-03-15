import React from 'react';
import {View,Text,Image,TouchableOpacity, StyleSheet} from  'react-native';


const PropertyCard = ({property,onPress}) => (
<TouchableOpacity onPress={()=> onPress(property.id)} style={styles.card}>
    <Image
    source={{uri: property.image}}
    style={styles.image}
    />

    <View style={styles.info}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.price}>₹{property.price.toLocaleString()}</Text>
        <Text style={styles.location}>{property.location}</Text>


    </View>



</TouchableOpacity>
);
const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        backgroundColor: "#fff",
        borderRadius: 12,
        margin:12,
        padding:12,
        elevation:4,
        shadowColor:" #000",
        shadowOpacity:0.1,
        shadowRadius:8
    },
    image:{
        width:120,
        height:120,
        borderRadius:12
    },
    info:{
        flex:1,
        
    }
})
export default PropertyCard;
