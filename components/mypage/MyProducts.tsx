import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useTemporaryProducts, type OwnedProduct } from '@/components/productList/TemporaryProducts';
import ProductEditor from './ProductEditor.tsx';
import { styles } from './MyProducts.ts';

function ProductThumbnail({ product }: { product: OwnedProduct }) {
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const unavailable = !product.image || failedImage === product.image;

  return (
    <View style={styles.thumbnail}>
      {unavailable ? (
        <View style={styles.imageFallback} accessibilityLabel={product.image ? '사진을 불러올 수 없어요' : '등록된 사진이 없어요'}>
          <Feather name="image" size={24} color="#728077" />
          <Text style={styles.imageFallbackText}>{product.image ? '사진 로딩 실패' : '사진 없음'}</Text>
        </View>
      ) : (
        <Image key={product.image} source={{ uri: product.image }} style={styles.image} accessibilityLabel={`${product.name} 사진`} onError={() => setFailedImage(product.image)} />
      )}
    </View>
  );
}

export default function MyProducts() {
  const { myProducts } = useTemporaryProducts();
  const [editing, setEditing] = useState<OwnedProduct | null | undefined>(undefined);
  return (
    <View style={styles.section}>
      <View style={styles.heading}>
        <Text accessibilityRole="header" style={styles.title}>내 상품 <Text style={styles.count}>{myProducts.length}</Text></Text>
        <Pressable accessibilityRole="button" onPress={() => setEditing(null)} style={styles.add}><Text style={styles.addText}>+ 상품 등록</Text></Pressable>
      </View>
      {myProducts.length === 0 ? (
        <View style={styles.empty}>
          <Feather name="package" size={28} color="#728077" />
          <Text style={styles.emptyTitle}>아직 등록한 상품이 없어요</Text>
          <Text style={styles.note}>상품 등록 버튼으로 첫 상품을 올려보세요.</Text>
        </View>
      ) : myProducts.map((product) => (
        <Pressable key={product.id} accessibilityRole="button" accessibilityLabel={`${product.name} 수정 및 삭제`} onPress={() => setEditing(product)} style={({ pressed }) => [styles.item, pressed && styles.pressed]}>
          <ProductThumbnail product={product} />
          <View style={styles.info}>
            <Text style={styles.note}>{product.category}</Text>
            <Text numberOfLines={2} style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price.toLocaleString('ko-KR')}원</Text>
          </View>
          <Feather name="chevron-right" size={20} color="#728077" />
        </Pressable>
      ))}
      <Text style={styles.notice}>임시 상품은 앱 재시작·새로고침 시 초기화됩니다.</Text>
      {editing !== undefined && <ProductEditor product={editing} onClose={() => setEditing(undefined)} />}
    </View>
  );
}
