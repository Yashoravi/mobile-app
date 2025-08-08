import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const jobs = [
  { id: '1', title: 'Frontend Developer', location: 'Colombo' },
  { id: '2', title: 'Backend Engineer', location: 'Kandy' },
  { id: '3', title: 'UI/UX Designer', location: 'Jaffna' },
];

export default function JobListScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job Vacancies</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: "JobDetailScreen", params: { id: item.id } })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 15, backgroundColor: '#e3ffe3', borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  location: { fontSize: 14, color: 'gray' }
});
