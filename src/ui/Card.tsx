// src/ui/Card.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "./theme";

export const Card = ({ children, style }) => (
  <View style={[styles.card, style]}>{children}</View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: theme.borderRadius.l,
    padding: theme.spacing.m,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
});
