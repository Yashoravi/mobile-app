import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Page2() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.categoryBox} onPress={() => router.push('/page3?type=intern')}>
        <Text style={styles.categoryText}>Intern Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryBox} onPress={() => router.push('/page3?type=non-intern')}>
        <Text style={styles.categoryText}>Non-Intern Jobs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f2f5', justifyContent: 'center', alignItems: 'center' },
  categoryBox: { width: '45%', backgroundColor: '#fff', padding: 20, borderRadius: 10, margin: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 },
  categoryText: { color: '#2c3e50', fontSize: 18, textAlign: 'center' },
});