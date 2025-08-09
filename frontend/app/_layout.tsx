

import { Stack } from 'expo-router';
import { Link } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="page1" options={{ title: 'Page 1' }} />
      <Stack.Screen name="page2" options={{ title: 'Page 2' }} />
      <Stack.Screen name="page3" options={{ title: 'Page 3' }} />
    </Stack>
  );
}


