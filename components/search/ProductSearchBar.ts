import { StyleSheet } from 'react-native';

import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  search: { width: '100%', maxWidth: 480, marginTop: 24, flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, backgroundColor: colors.surface, borderWidth: 1, borderColor: '#D6E2D9', borderRadius: 14, minHeight: 54, boxShadow: '0 4px 16px rgba(29, 48, 39, 0.04)' },
  searchInput: { flex: 1, minWidth: 0, fontSize: 14, color: colors.text, paddingVertical: 16, outlineWidth: 0 },
  searchFocused: { borderColor: colors.primary, boxShadow: '0 0 0 3px rgba(33, 107, 80, 0.10)' },
  clearButton: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 22, backgroundColor: colors.background },
});
