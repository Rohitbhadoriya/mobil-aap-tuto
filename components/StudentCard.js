import { View, Text, Button, StyleSheet } from 'react-native';

export default function StudentCard({ name, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Button title="Delete" color="red" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: { fontSize: 18, fontWeight: '600' },
});