import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

const PropertyDetails = ({ property }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: property.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.price}>₹{property.price.toLocaleString()}</Text>
        <Text style={styles.location}>{property.location}</Text>
        <Button
          title={showMore ? 'Hide Description' : 'Show Description'}
          onPress={() => setShowMore(!showMore)}
          color="#e74c3c"
        />
        {showMore && <Text style={styles.description}>{property.description}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 250 },
  content: { padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 24, color: '#27ae60', marginBottom: 8 },
  location: { fontSize: 18, color: '#7f8c8d', marginBottom: 16 },
  description: { marginTop: 16, fontSize: 16, lineHeight: 24 },
});

export default PropertyDetails;