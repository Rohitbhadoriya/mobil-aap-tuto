import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchForm from '../components/SearchForm';
import PropertyList from '../components/PropertyList';
import { properties } from '../data/properties';

const HomeScreen = ({ navigation }) => {
  const [filtered, setFiltered] = useState(null);

  const handleSearch = (term) => {
    if (!term.trim()) {
      setFiltered(null); // Show all
      return;
    }
    const lowerTerm = term.toLowerCase();
    const results = properties.filter(p => p.location.toLowerCase().includes(lowerTerm));
    setFiltered(results);
  };

  const handleSelect = (id) => {
    const property = properties.find(p => p.id === id);
    if (property) {
      navigation.navigate('Details', { property });
    }
  };

  return (
    <View style={styles.container}>
      <SearchForm onSearch={handleSearch} />
      <PropertyList onSelectProperty={handleSelect} filteredProperties={filtered} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;