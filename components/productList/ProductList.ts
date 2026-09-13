import { StyleSheet } from 'react-native';

import { colors, layout } from '@/constants/design';

export const styles = StyleSheet.create({
  mobilePadding: { paddingHorizontal: layout.mobilePadding },
  list: { flex: 1 },
  listContent: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center', paddingHorizontal: layout.desktopPadding, paddingBottom: 12 },
  sectionHeading: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, gap: 8 },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 9, flexShrink: 1 },
  sectionTitle: { fontSize: 18, lineHeight: 26, fontWeight: '700', color: colors.text, flexShrink: 1, letterSpacing: -0.5 },
  count: { color: colors.primary, fontSize: 12, fontWeight: '700', backgroundColor: colors.primarySoft, overflow: 'hidden', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 3 },
  sort: { minHeight: 44, flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 10, borderWidth: 1, borderColor: colors.border, borderRadius: 10, backgroundColor: colors.surface },
  sortText: { fontSize: 12, fontWeight: '500', color: colors.secondary },
  row: { gap: '2%' },
  empty: { paddingVertical: 52, paddingHorizontal: 16, alignItems: 'center', gap: 12, borderWidth: 1, borderColor: colors.border, borderRadius: 20, backgroundColor: colors.surface, marginBottom: 24 },
  emptyTitle: { fontSize: 17, fontWeight: '600', color: colors.text, textAlign: 'center' },
  emptyDescription: { fontSize: 13, lineHeight: 21, color: colors.secondary, textAlign: 'center' },
  reset: { minHeight: 44, justifyContent: 'center', marginTop: 8, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10, backgroundColor: colors.primary },
  resetText: { color: '#fff', fontWeight: '600' },
  footer: { borderTopWidth: 1, borderTopColor: colors.border, paddingVertical: 28, marginTop: 12, alignItems: 'center', gap: 7 },
  footerBrand: { color: '#738471', fontWeight: '800', fontSize: 20 },
  footerText: { color: colors.secondary, fontSize: 12 },
  sampleNote: { color: colors.secondary, fontSize: 11, marginTop: 5 },
  buttonPressed: { opacity: 0.7 }, 
});
