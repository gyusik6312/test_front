import { StyleSheet } from 'react-native';

import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  categories: { gap: 8, paddingTop: 24, paddingBottom: 28 },
  chip: { minHeight: 44, justifyContent: 'center', paddingHorizontal: 19, paddingVertical: 11, borderRadius: 22, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { fontSize: 13, fontWeight: '600', color: colors.secondary },
  chipTextActive: { color: '#fff', fontWeight: '600' },
  chipPressed: { opacity: 0.75, transform: [{ scale: 0.97 }] },
});
