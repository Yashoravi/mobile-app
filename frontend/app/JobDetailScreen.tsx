import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Details for ID: {id}</Text>
      <Text style={styles.detail}>Full Job Description will go here...</Text>
      <Button title="Apply Now" onPress={() => router.push("JobApplyScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  detail: { fontSize: 16, marginBottom: 20 }
});
