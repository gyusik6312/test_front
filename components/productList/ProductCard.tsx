import { styles } from './styles/ProductCard';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';

import type { Product } from '@/constants/products';

export default function ProductCard({ product }: { product: Product }) {
  const [failed, setFailed] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        {failed ? (
          <View style={styles.imageFallback}><Feather name="image" size={30} color="#929c94" /><Text style={styles.fallbackText}>사진을 불러올 수 없어요</Text></View>
        ) : (
          <Image source={{ uri: product.image }} style={styles.image} accessibilityLabel={product.name} onError={() => setFailed(true)} />
        )}
      </View>
      <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toLocaleString('ko-KR')}<Text style={styles.won}>원</Text></Text>
    </View>
  );
}
