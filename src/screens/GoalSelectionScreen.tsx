import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const GoalSelectionScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>What's Your Dream Goal?</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Doctor, Programmer, Artist"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
        />
        <View style={styles.categoryGrid}>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Tech</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Medical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Business</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryText}>Creative</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.generateButton} onPress={() => router.push('/parallel-result')}>
          <Text style={styles.generateButtonText}>Generate Parallel You</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    padding: 20,
    borderRadius: 20,
    fontSize: 16,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  generateButton: {
    backgroundColor: 'rgba(0, 122, 255, 0.8)',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: 'rgba(0, 122, 255, 0.5)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GoalSelectionScreen;
