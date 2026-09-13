import { StyleSheet } from 'react-native';

import { colors, layout } from '@/constants/design';

export const styles = StyleSheet.create({
  actions: { flexDirection: 'row', alignItems: 'center', gap: 12, flexShrink: 1 },
  loginLink: { paddingHorizontal: 16, paddingVertical: 13, borderRadius: 10, backgroundColor: colors.primarySoft, color: colors.primary, fontSize: 13, fontWeight: '600', overflow: 'hidden' },
  header: { borderBottomWidth: 1, borderBottomColor: colors.border, backgroundColor: colors.surface },
  headerInner: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center', paddingHorizontal: layout.desktopPadding, minHeight: 76, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  mobilePadding: { paddingHorizontal: layout.mobilePadding, minHeight: 68, paddingVertical: 12 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 9 },
  brandIcon: { backgroundColor: colors.primary, borderRadius: 12, padding: 9 },
  brandName: { fontSize: 26, fontWeight: '800', color: colors.text, letterSpacing: -1.2 },
  headerNote: { fontSize: 12, color: colors.secondary, flexShrink: 1, textAlign: 'right' },
});
