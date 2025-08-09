import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="page1" options={{ title: 'Home' }} />
      <Stack.Screen name="page2" options={{ title: 'Categories' }} />
      <Stack.Screen name="page3" options={{ title: 'Jobs' }} />
    </Stack>
  );
}

