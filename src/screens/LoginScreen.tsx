// src/screens/LoginScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../ui/Button";
import { theme } from "../ui/theme";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* Placeholder for input fields */}
      <Button title="Login" onPress={() => {
        // Handle login logic
        console.log("Login button pressed");
      }} />
      <Button
        title="Go to Sign Up"
        variant="secondary"
        onPress={() => navigation.navigate("SignUp")}
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
