import { styles } from './ProductCard.ts';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';

import type { Product } from '@/constants/products';

export default function ProductCard({ product }: { product: Product }) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        {failedImage === product.image || !product.image ? (
          <View style={styles.imageFallback}><Feather name="image" size={30} color="#929c94" /><Text style={styles.fallbackText}>{product.image ? '사진을 불러올 수 없어요' : '등록된 사진이 없어요'}</Text></View>
        ) : (
          <Image key={product.image} source={{ uri: product.image }} style={styles.image} accessibilityLabel={product.name} onError={() => setFailedImage(product.image)} />
        )}
      </View>
      <Text style={styles.productName} numberOfLines={2}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toLocaleString('ko-KR')}<Text style={styles.won}>원</Text></Text>
    </View>
  );
}
