import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const jobsData = {
  intern: [
    { title: 'Internship at Company A', details: 'Colombo • Full-time' },
    { title: 'Internship at Company B', details: 'Kandy • Part-time' },
  ],
  'non-intern': [
    { title: 'Frontend Developer at Company X', details: 'Colombo • Full-time' },
    { title: 'Digital Marketing at Company Y', details: 'Kandy • Part-time' },
  ],
};

export default function Page3() {
  const { type } = useLocalSearchParams();
  const jobType = typeof type === 'string' ? type : (Array.isArray(type) ? type[0] : 'intern');
  const jobs = jobsData[jobType] || [];

  const renderItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item?.title || 'No Title'}</Text>
      <Text style={styles.jobDetails}>{item?.details || 'No Details'}</Text>
      <TouchableOpacity style={styles.viewBtn}>
        <Text style={styles.btnText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<View style={styles.searchBar} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f2f5' },
  searchBar: { height: 50, backgroundColor: '#fff', borderRadius: 5, marginBottom: 10, borderWidth: 1, borderColor: '#ccc' },
  jobItem: { padding: 15, backgroundColor: '#fff', borderRadius: 5, marginBottom: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 },
  jobTitle: { fontSize: 18, color: '#333', marginBottom: 5 },
  jobDetails: { fontSize: 14, color: '#666' },
  viewBtn: { marginTop: 10, padding: 5, backgroundColor: '#007bff', borderRadius: 5, alignItems: 'center' },
  btnText: { color: 'white', fontSize: 14 },
});