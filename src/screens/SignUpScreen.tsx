// src/screens/SignUpScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../ui/Button";
import { theme } from "../ui/theme";

export const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {/* Placeholder for input fields */}
      <Button title="Sign Up" onPress={() => {
        // Handle sign up logic
        console.log("Sign up button pressed");
      }} />
      <Button
        title="Go to Login"
        variant="secondary"
        onPress={() => navigation.navigate("Login")}
        style={{ marginTop: theme.spacing.m }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: theme.spacing.m,
    backgroundColor: theme.colors.primaryBackground,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.primaryText,
    textAlign: "center",
    marginBottom: theme.spacing.xl,
  },
});
