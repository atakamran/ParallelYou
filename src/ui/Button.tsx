// src/ui/Button.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "./theme";

export const Button = ({ title, onPress, variant = "primary", style }) => {
  const buttonStyle =
    variant === "primary" ? styles.primaryButton : styles.secondaryButton;
  const textStyle =
    variant === "primary" ? styles.primaryText : styles.secondaryText;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
    borderRadius: theme.borderRadius.m,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: theme.colors.primaryAccent,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: theme.colors.primaryAccent,
  },
  text: {
    ...theme.typography.button,
  },
  primaryText: {
    color: theme.colors.primaryBackground,
  },
  secondaryText: {
    color: theme.colors.primaryAccent,
  },
});
