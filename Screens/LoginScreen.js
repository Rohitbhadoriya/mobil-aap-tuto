import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (name.trim() === '') {
      Alert.alert('Error', 'Apna naam to daalo bhai!');
      return;
    }
    navigation.navigate('Main', { studentName: name.trim() });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Attendance Manager</Text>
      <TextInput
        placeholder="Enter Your Name (e.g., Rohit)"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 30, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 40, textAlign: 'center', color: '#333' },
  input: { borderWidth: 1.5, borderColor: '#4CAF50', padding: 14, marginBottom: 25, borderRadius: 10, fontSize: 16 },
});