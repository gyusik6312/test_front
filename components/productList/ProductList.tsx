import { styles } from './ProductList.ts';
import { Feather } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import { FlatList, Pressable, Text, View, useWindowDimensions } from 'react-native';

import type { Category, Product } from '@/constants/products';
import ProductCard from './ProductCard.tsx';

type ProductListProps = {
  products: Product[];
  query: string;
  category: Category;
  sortLabel: string;
  onSortChange: () => void;
  onReset: () => void;
  header?: ReactNode;
};

export default function ProductList({ products, query, category, sortLabel, onSortChange, onReset, header }: ProductListProps) {
  const { width } = useWindowDimensions();
  const wide = width >= 760;
  const columns = width >= 1050 ? 4 : wide ? 3 : 2;
  return (
    <FlatList
      key={columns}
      data={products}
      numColumns={columns}
      keyExtractor={(item) => item.id}
      style={styles.list}
      contentContainerStyle={[styles.listContent, !wide && styles.mobilePadding]}
      columnWrapperStyle={styles.row}
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => <View style={{ width: `${(100 - (columns - 1) * 2) / columns}%` }}><ProductCard product={item} /></View>}
      ListHeaderComponent={
        <View>
          {header}
          <View style={styles.sectionHeading}>
            <View style={styles.sectionTitleRow}><Text style={styles.sectionTitle}>{query.trim() ? '검색 결과' : category === '전체' ? '새로 올라온 물건' : category}</Text><Text style={styles.count}>{products.length}</Text></View>
            <Pressable onPress={onSortChange} accessibilityRole="button" accessibilityLabel={`정렬: ${sortLabel}. 눌러서 변경`} style={({ pressed }) => [styles.sort, pressed && styles.buttonPressed]}><Text style={styles.sortText}>{sortLabel}</Text><Feather name="chevron-down" size={15} color="#647067" /></Pressable>
          </View>
        </View>
      }
      ListEmptyComponent={<View style={styles.empty}><Feather name="search" size={30} color="#8c9b90" /><Text style={styles.emptyTitle}>찾으시는 물건이 아직 없어요</Text><Text style={styles.emptyDescription}>다른 검색어나 카테고리로 찾아보세요.</Text><Pressable accessibilityRole="button" onPress={onReset} style={({ pressed }) => [styles.reset, pressed && styles.buttonPressed]}><Text style={styles.resetText}>전체 상품 보기</Text></Pressable></View>}
      ListFooterComponent={<View style={styles.footer}><Text style={styles.footerBrand}>모아.</Text><Text style={styles.footerText}>물건의 다음 이야기가 시작되는 곳</Text><Text style={styles.sampleNote}>지금은 샘플 상품을 둘러보고 있어요.</Text></View>}
    />
  );
}
