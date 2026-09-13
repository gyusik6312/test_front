import { styles } from './ProductListScreen.ts';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProductCategoryFilter from '@/components/categoryFilter/ProductCategoryFilter.tsx';
import MarketHeader from '@/components/layout/MarketHeader.tsx';
import ProductList from '@/components/productList/ProductList.tsx';
import ProductSearch from '@/components/search/ProductSearch.tsx';
import { useProductSearch } from '@/components/search/useProductSearch';
import { useTemporaryProducts } from '@/components/productList/TemporaryProducts';

export default function ProductListScreen() {
  const { products } = useTemporaryProducts();
  const search = useProductSearch(products);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <MarketHeader />
      <ProductList
        products={search.products}
        query={search.query}
        category={search.category}
        sortLabel={search.sortLabel}
        onSortChange={search.cycleSort}
        onReset={search.reset}
        header={
          <>
            <ProductSearch query={search.query} onChangeQuery={search.setQuery} />
            <ProductCategoryFilter category={search.category} onChangeCategory={search.setCategory} />
          </>
        }
      />
    </SafeAreaView>
  );
}
