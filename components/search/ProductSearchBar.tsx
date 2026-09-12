import { colors } from '@/constants/design';
import { styles } from './styles/ProductSearchBar';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';

type ProductSearchBarProps = {
  query: string;
  onChangeQuery: (query: string) => void;
};


export default function ProductSearchBar({ query, onChangeQuery }: ProductSearchBarProps) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={[styles.search, focused && styles.searchFocused]}>
      <Feather name="search" size={21} color={colors.primary} />
      <TextInput value={query} onChangeText={onChangeQuery} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} selectionColor={colors.primary} placeholder="어떤 물건을 찾고 있나요?" placeholderTextColor={colors.muted} accessibilityLabel="상품 이름 검색" style={styles.searchInput} returnKeyType="search" />
      {query.length > 0 && <Pressable onPress={() => onChangeQuery('')} style={styles.clearButton} accessibilityRole="button" accessibilityLabel="검색어 지우기" hitSlop={6}><Feather name="x" size={16} color={colors.secondary} /></Pressable>}
    </View>
  );
}
