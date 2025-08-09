import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Page1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Dream Job</Text>
      <Text style={styles.subtitle}>Explore top opportunities in your field</Text>
      <TouchableOpacity style={styles.getStarted} onPress={() => router.push('/page2')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.illustration}>
        {/* Placeholder for illustration */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6f0fa', padding: 20 },
  title: { color: '#2c3e50', fontSize: 30, marginBottom: 10 },
  subtitle: { color: '#7f8c8d', fontSize: 18, marginBottom: 20 },
  getStarted: { backgroundColor: '#00aaff', padding: 15, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 16 },
  illustration: { marginTop: 20 },
});