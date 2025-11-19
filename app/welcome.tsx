import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your future.</Text>
      <Text style={styles.subtitle}>Discover your parallel self.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.h1,
    color: colors.dark.text,
    marginBottom: 10,
  },
  subtitle: {
    ...typography.body,
    color: colors.dark.text,
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.dark.accent,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    ...typography.body,
    color: colors.dark.text,
    fontWeight: 'bold',
  },
});
