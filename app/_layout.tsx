import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="goal-selection" options={{ headerShown: false }} />
      <Stack.Screen name="parallel-result" options={{ headerShown: false }} />
      <Stack.Screen name="universe-details" options={{ headerShown: false }} />
      <Stack.Screen name="saved-universes" options={{ headerShown: false }} />
      <Stack.Screen name="profile-settings" options={{ headerShown: false }} />
    </Stack>
  );
}
