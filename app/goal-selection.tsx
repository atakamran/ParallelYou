import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors } from '@/constants/colors';
import { typography } from '@/constants/typography';

export default function GoalSelectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Goal</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a goal..."
        placeholderTextColor={colors.dark.border}
      />
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
  searchInput: {
    ...typography.body,
    color: colors.dark.text,
    backgroundColor: colors.dark.glass,
    borderWidth: 1,
    borderColor: colors.dark.border,
    borderRadius: 10,
    padding: 15,
    width: '80%',
  },
});
