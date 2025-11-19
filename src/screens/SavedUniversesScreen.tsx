import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const savedUniverses = [
  { id: '1', title: 'Quantum Physicist', probability: '88%' },
  { id: '2', title: 'Neuro-Artist', probability: '76%' },
  { id: '3', title: 'Bio-Architect', probability: '92%' },
  { id: '4', title: 'Astro-Botanist', probability: '81%' },
  { id: '5', title: 'Zero-G Welder', probability: '64%' },
  { id: '6', title: 'AI Ethicist', probability: '95%' },
];

const SavedUniversesScreen = () => {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => router.push('/universe-details')}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.05)']}
        style={styles.gradient}
      >
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardProbability}>Probability: {item.probability}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0a0a1a', '#000']} style={styles.background} />
      <Text style={styles.headerTitle}>Saved Universes</Text>
      <FlatList
        data={savedUniverses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
      <TouchableOpacity style={styles.button} onPress={() => router.push('/profile-settings')}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
    textShadowColor: 'rgba(0, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  grid: {
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  gradient: {
    padding: 20,
    height: 150,
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardProbability: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
});

export default SavedUniversesScreen;
