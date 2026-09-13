import { styles } from './ProductSearch.ts';
import { Text, View, useWindowDimensions } from 'react-native';

import ProductSearchBar from './ProductSearchBar.tsx';


type ProductSearchProps = {
  query: string;
  onChangeQuery: (query: string) => void;
};

export default function ProductSearch({ query, onChangeQuery }: ProductSearchProps) {
  const wide = useWindowDimensions().width >= 760;
  return (
    <View style={[styles.hero, !wide && styles.heroMobile]}>
      <View style={styles.eyebrow}><View style={styles.dot} /><Text style={styles.eyebrowText}>취향과 취향 사이, 모아</Text></View>
      <Text style={[styles.title, !wide && styles.titleMobile]}>누군가의 물건이,{ '\n' }나의 새로운 취향으로.</Text>
      <Text style={styles.subtitle}>당신의 일상에 어울리는 물건을 만나보세요.</Text>
      <ProductSearchBar query={query} onChangeQuery={onChangeQuery} />
    </View>
  );
}
