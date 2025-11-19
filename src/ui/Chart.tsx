// src/ui/Chart.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "./theme";
import { Card } from "./Card";

// Placeholder for a chart component.
// In a real app, you would use a library like react-native-svg-charts.
export const Chart = ({ data }) => (
  <Card>
    <View style={styles.chart}>
      <Text style={styles.text}>[Chart Placeholder]</Text>
      <Text style={styles.subText}>Data: {JSON.stringify(data)}</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  chart: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    ...theme.typography.h3,
    color: theme.colors.primaryText,
  },
  subText: {
    ...theme.typography.bodySmall,
    color: theme.colors.secondaryText,
    marginTop: theme.spacing.s,
  },
});
