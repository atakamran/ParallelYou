// src/navigation/AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LoginScreen } from "../screens/LoginScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { DashboardScreen } from "../screens/DashboardScreen";
import { RoadmapScreen } from "../screens/RoadmapScreen";
import { HabitsScreen } from "../screens/HabitsScreen";
import { theme } from "../ui/theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: theme.colors.secondaryBackground },
      tabBarActiveTintColor: theme.colors.primaryAccent,
      tabBarInactiveTintColor: theme.colors.secondaryText,
    }}
  >
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Roadmap" component={RoadmapScreen} />
    <Tab.Screen name="Habits" component={HabitsScreen} />
  </Tab.Navigator>
);

export const AppNavigator = () => {
  // Placeholder for user authentication state
  const isAuthenticated = true; // Replace with actual auth state logic

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
