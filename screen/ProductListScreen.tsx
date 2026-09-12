import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProductCategoryFilter from '@/components/categoryFilter/ProductCategoryFilter';
import MarketHeader from '@/components/layout/MarketHeader';
import ProductList from '@/components/productList/ProductList';
import ProductSearch from '@/components/search/ProductSearch';
import { useProductSearch } from '@/components/search/useProductSearch';
import { products } from '@/constants/products';
import { styles } from './styles/ProductListScreen';

export default function ProductListScreen() {
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
