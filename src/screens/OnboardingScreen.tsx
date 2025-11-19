import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const OnboardingScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.tagline}>Choose Your Future.</Text>
      <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/goal-selection')}>
        <Text style={styles.ctaButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagline: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  ctaButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
