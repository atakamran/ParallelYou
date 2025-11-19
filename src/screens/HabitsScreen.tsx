// src/screens/HabitsScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Section } from "../ui/Section";
import { theme } from "../ui/theme";

export const HabitsScreen = () => {
  return (
    <View style={styles.container}>
      <Section title="Habit Tracker">
        <Text style={styles.text}>This screen will help you track your habits.</Text>
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.primaryBackground,
  },
  text: {
    ...theme.typography.bodyLarge,
    color: theme.colors.primaryText,
  },
});
