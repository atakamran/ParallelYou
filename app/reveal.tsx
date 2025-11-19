import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

export default function RevealScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <Text style={styles.title}>Your Parallel Universe</Text>
        <Text style={styles.profession}>Software Engineer</Text>
        <Text style={styles.salary}>$150,000 - $250,000</Text>
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
  profileCard: {
    backgroundColor: colors.dark.glass,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.dark.border,
  },
  profession: {
    ...typography.h2,
    color: colors.dark.text,
    marginTop: 10,
  },
  salary: {
    ...typography.body,
    color: colors.dark.text,
    marginTop: 5,
  },
});
