// src/screens/DashboardScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Section } from "../ui/Section";
import { theme } from "../ui/theme";

export const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Section title="Dashboard">
        <Text style={styles.text}>Welcome to your Dashboard!</Text>
        <Text style={styles.text}>Here, you'll see a summary of your progress and your parallel future self.</Text>
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
