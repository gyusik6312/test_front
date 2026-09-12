import { useMemo, useState } from 'react';

import { type Category, type Product } from '@/constants/products';

const sorts = ['최신순', '낮은 가격순', '높은 가격순'] as const;

export function useProductSearch(products: Product[]) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('전체');
  const [sort, setSort] = useState(0);
  const filtered = useMemo(() => {
    const result = products.filter((product) => (category === '전체' || product.category === category) && product.name.toLowerCase().includes(query.trim().toLowerCase()));
    if (sort === 1) result.sort((a, b) => a.price - b.price);
    if (sort === 2) result.sort((a, b) => b.price - a.price);
    return result;
  }, [category, query, sort, products]);

  return {
    query, setQuery, category, setCategory, products: filtered,
    sortLabel: sorts[sort],
    cycleSort: () => setSort((current) => (current + 1) % sorts.length),
    reset: () => { setQuery(''); setCategory('전체'); },
  };
}
