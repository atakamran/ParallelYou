// src/screens/RoadmapScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Section } from "../ui/Section";
import { theme } from "../ui/theme";

export const RoadmapScreen = () => {
  return (
    <View style={styles.container}>
      <Section title="Your Roadmap">
        <Text style={styles.text}>This screen will display your personalized roadmap.</Text>
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
