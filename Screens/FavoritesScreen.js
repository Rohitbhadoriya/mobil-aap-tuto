import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

const favoritesData = [
  { title: 'Nagpur Properties', data: ['Cozy 2BHK', 'Modern Studio'] },
  { title: 'Mumbai Properties', data: ['Luxury Villa'] },
  { title: 'Indore Properties', data: ['3BHK Flat'] },
];

const FavoritesScreen = () => (
  <SectionList
    sections={favoritesData}
    keyExtractor={(item, index) => item + index}
    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
    renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
    contentContainerStyle={{ padding: 10 }}
  />
);

const styles = StyleSheet.create({
  header: { fontSize: 20, fontWeight: 'bold', backgroundColor: '#ecf0f1', padding: 10, marginBottom: 5 },
  item: { padding: 15, fontSize: 16, borderBottomWidth: 1, borderColor: '#ddd' },
});

export default FavoritesScreen;