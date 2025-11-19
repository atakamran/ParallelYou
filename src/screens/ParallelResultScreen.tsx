import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Assuming expo-linear-gradient is installed or will be
import { useRouter } from 'expo-router';

const ParallelResultScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity onPress={() => router.push('/universe-details')}>
          <View style={styles.profileCard}>
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
              style={styles.gradient}
            >
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>AI</Text>
              </View>
              <Text style={styles.careerTitle}>Quantum Physicist</Text>
              <Text style={styles.salary}>Estimated Salary: $250,000</Text>

              <View style={styles.tagsContainer}>
                <Text style={styles.tag}>Innovative</Text>
                <Text style={styles.tag}>Analytical</Text>
                <Text style={styles.tag}>Visionary</Text>
              </View>

              <View style={styles.probabilityMeter}>
                <Text style={styles.probabilityLabel}>Probability: 88%</Text>
                <View style={styles.meterBackground}>
                  <LinearGradient
                    colors={['#00FFFF', '#8A2BE2']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.meterFill, { width: '88%' }]}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/saved-universes')}>
          <Text style={styles.buttonText}>View Saved Universes</Text>
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
  profileCard: {
    width: '100%',
    borderRadius: 32,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
  gradient: {
    padding: 30,
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderColor: '#00FFFF',
    borderWidth: 2,
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  avatarText: {
    color: '#00FFFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  careerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  salary: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 18,
    marginBottom: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  tag: {
    backgroundColor: 'rgba(0, 255, 255, 0.1)',
    color: '#00FFFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    margin: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  probabilityMeter: {
    width: '100%',
    alignItems: 'center',
  },
  probabilityLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  meterBackground: {
    width: '100%',
    height: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  meterFill: {
    height: '100%',
    borderRadius: 5,
  },
});

export default ParallelResultScreen;
