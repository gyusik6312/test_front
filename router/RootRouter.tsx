import { Stack } from 'expo-router';

import { TemporarySessionProvider, useTemporarySession } from './TemporarySession';

function SessionRoutes() {
  const { user } = useTemporarySession();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="login" />
      </Stack.Protected>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="index" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootRouter() {
  return <TemporarySessionProvider><SessionRoutes /></TemporarySessionProvider>;
}
