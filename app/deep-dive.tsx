import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

export default function DeepDiveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deep Dive</Text>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Mini Story</Text>
        <Text style={styles.bodyText}>
          In a neon-lit city, you are a renowned software engineer, known for creating revolutionary AI.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Key Traits</Text>
        <Text style={styles.bodyText}>- Analytical</Text>
        <Text style={styles.bodyText}>- Creative</Text>
        <Text style={styles.bodyText}>- Detail-oriented</Text>
      </View>
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: colors.dark.glass,
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '90%',
  },
  sectionTitle: {
    ...typography.h2,
    color: colors.dark.text,
    marginBottom: 10,
  },
  bodyText: {
    ...typography.body,
    color: colors.dark.text,
  },
});
