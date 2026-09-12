import { styles } from './styles/ProductCategoryFilter';
import { Pressable, ScrollView, Text } from 'react-native';

import { categories, type Category } from '@/constants/products';

type ProductCategoryFilterProps = {
  category: Category;
  onChangeCategory: (category: Category) => void;
};


export default function ProductCategoryFilter({ category, onChangeCategory }: ProductCategoryFilterProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
      {categories.map((item) => <Pressable key={item} onPress={() => onChangeCategory(item)} accessibilityRole="button" accessibilityState={{ selected: category === item }} style={({ pressed }) => [styles.chip, category === item && styles.chipActive, pressed && styles.chipPressed]}><Text style={[styles.chipText, category === item && styles.chipTextActive]}>{item}</Text></Pressable>)}
    </ScrollView>
  );
}
