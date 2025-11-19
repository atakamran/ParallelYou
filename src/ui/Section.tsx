// src/ui/Section.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "./theme";

export const Section = ({ title, children, style }) => (
  <View style={[styles.section, style]}>
    {title && <Text style={styles.title}>{title}</Text>}
    {children}
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.primaryText,
    marginBottom: theme.spacing.m,
  },
});
