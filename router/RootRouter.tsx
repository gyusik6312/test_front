import { Stack } from 'expo-router';
import { TemporaryReviewsProvider } from '@/components/productDetail/TemporaryReviews';
import { TemporaryProductsProvider } from '@/components/productList/TemporaryProducts';

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
        <Stack.Screen name="mypage" />
        <Stack.Screen name="product/[id]" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootRouter() {
  return <TemporarySessionProvider><TemporaryProductsProvider><TemporaryReviewsProvider><SessionRoutes /></TemporaryReviewsProvider></TemporaryProductsProvider></TemporarySessionProvider>;
}
