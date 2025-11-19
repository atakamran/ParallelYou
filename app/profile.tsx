import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Universes</Text>
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>Software Engineer</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>Doctor</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridText}>Startup Founder</Text>
        </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  gridItem: {
    backgroundColor: colors.dark.glass,
    borderRadius: 15,
    padding: 20,
    margin: 10,
    width: '40%',
    alignItems: 'center',
  },
  gridText: {
    ...typography.body,
    color: colors.dark.text,
    fontWeight: 'bold',
  },
});
