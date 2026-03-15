import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }) {
  const { studentName } = route.params || { studentName: 'Guest' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.info}>Name: {studentName}</Text>
      <Text style={styles.info}>Role: Student / Teacher</Text>
      <Text style={styles.info}>App Version: 1.0</Text>
      <Text style={styles.note}>Made with ❤️ in React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40, color: '#4CAF50' },
  info: { fontSize: 20, marginVertical: 10, color: '#333' },
  note: { fontSize: 16, color: '#777', marginTop: 50 },
});