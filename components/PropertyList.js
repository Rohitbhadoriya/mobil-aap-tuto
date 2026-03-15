import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import PropertyCard from './PropertyCard';
import { properties } from '../data/properties';

const PropertyList = ({ onSelectProperty, filteredProperties }) => {
  const [data, setData] = useState(properties); // Start with all properties

  useEffect(() => {
    if (filteredProperties !== null) {
      setData(filteredProperties);
    } else {
      setData(properties);
    }
  }, [filteredProperties]);

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <Text style={styles.emptyText}>No properties found 😔</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PropertyCard property={item} onPress={onSelectProperty} />
          )}
          contentContainerStyle={{ paddingBottom: 20 }} // Bottom padding for last item
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  emptyText: { textAlign: 'center', marginTop: 100, fontSize: 18, color: 'gray' },
});

export default PropertyList;