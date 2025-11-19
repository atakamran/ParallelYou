import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const UniverseDetailsScreen = () => {
  const Section = ({ title, children }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionContent}>
        <Text style={styles.sectionText}>{children}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#000', '#0a0a1a']} style={styles.background} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>The Story of a Quantum Physicist</Text>

        <Section title="Backstory">
          In a universe where humanity has begun to harness the power of quantum mechanics for interstellar travel, you emerged as a leading mind. Your early work on quantum entanglement led to a breakthrough in faster-than-light communication, forever changing the course of civilization.
        </Section>

        <Section title="Skills Required">
          - Quantum Mechanics Mastery {'\n'}- Advanced Mathematics {'\n'}- Subatomic Particle Physics {'\n'}- Starship Engineering Principles {'\n'}- Multidimensional Topology
        </Section>

        <Section title="Strengths & Weaknesses">
          <Text style={styles.strong}>Strengths:</Text> Unparalleled intellect, relentless curiosity, and the ability to visualize complex quantum states. {'\n'}
          <Text style={styles.weak}>Weaknesses:</Text> Tendency to overlook practical, real-world applications in favor of theoretical purity; occasional social isolation due to intense focus.
        </Section>

        <Section title="Roadmap to This Universe">
          1. Excel in advanced physics and mathematics. {'\n'}2. Pursue a Ph.D. in Quantum Field Theory. {'\n'}3. Join a leading research institution like the 'Institute for Interdimensional Studies'. {'\n'}4. Publish groundbreaking research on quantum tunneling. {'\n'}5. Lead a team to develop the first working FTL drive.
        </Section>
      </ScrollView>
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
  scrollContainer: {
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#00FFFF',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    borderLeftColor: '#00FFFF',
    borderLeftWidth: 3,
    paddingLeft: 10,
  },
  sectionContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  sectionText: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: 16,
    lineHeight: 24,
  },
  strong: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  weak: {
    color: '#F44336',
    fontWeight: 'bold',
  },
});

export default UniverseDetailsScreen;
