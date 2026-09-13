import { Feather } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTemporaryProducts } from '@/components/productList/TemporaryProducts';
import ProductReviews from '@/components/productDetail/ProductReviews.tsx';
import { sampleDetails } from '@/constants/productDetails';
import { colors } from '@/constants/design';
import { styles } from './ProductDetailScreen.ts';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { products } = useTemporaryProducts();
  const product = products.find((item) => item.id === id);
  const [failedImage, setFailedImage] = useState<string | null>(null);
  const wide = useWindowDimensions().width >= 760;
  const sample = product && !product.ownerEmail ? sampleDetails[product.id] : undefined;

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Link href="/" style={styles.back}>← 상품 목록으로</Link>
        {!product ? (
          <View style={styles.empty}>
            <Feather name="package" size={36} color={colors.muted} />
            <Text style={styles.title}>상품을 찾을 수 없어요</Text>
            <Text style={styles.body}>삭제되었거나 임시 상품 데이터가 초기화되었을 수 있습니다.</Text>
          </View>
        ) : (
          <>
            <View style={[styles.hero, wide && styles.heroWide]}>
              <View style={[styles.imageBox, wide && styles.imageWide]}>
                {product.image && failedImage !== product.image ? (
                  <Image key={product.image} source={{ uri: product.image }} accessibilityLabel={`${product.name} 사진`} style={styles.image} onError={() => setFailedImage(product.image)} />
                ) : (
                  <View style={styles.empty}><Feather name="image" size={40} color={colors.muted} /><Text style={styles.body}>{product.image ? '사진을 불러올 수 없어요' : '등록된 사진이 없어요'}</Text></View>
                )}
              </View>
              <View style={styles.summary}>
                <Text style={styles.category}>{product.category}</Text>
                <Text accessibilityRole="header" style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>{product.price.toLocaleString('ko-KR')}<Text style={styles.currency}> 원</Text></Text>
                <View style={styles.seller}>
                  <Feather name="user" size={24} color={colors.primary} />
                  <View style={styles.sellerText}><Text style={styles.caption}>판매자</Text><Text style={styles.body}>{product.ownerEmail?.split('@')[0] || '샘플 판매자'}</Text></View>
                </View>
                {!sample && <Text style={styles.caption}>임시 등록 상품입니다. 거래 방식은 판매자와 확인해 주세요.</Text>}
              </View>
            </View>
            <View style={styles.section}>
              <Text accessibilityRole="header" style={styles.sectionTitle}>상품 설명</Text>
              <Text selectable style={styles.body}>{product.description || sample?.description || '등록된 상품 설명이 없습니다.'}</Text>
            </View>
            <ProductReviews key={product.id} product={product} sample={!!sample} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
