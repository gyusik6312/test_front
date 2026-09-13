import { StyleSheet } from 'react-native';
import { colors, layout } from '@/constants/design';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { width: '100%', maxWidth: layout.maxWidth, alignSelf: 'center', padding: 20, paddingBottom: 48, gap: 24 },
  back: { alignSelf: 'flex-start', paddingVertical: 14, color: colors.secondary, fontSize: 13 },
  hero: { gap: 28 },
  heroWide: { flexDirection: 'row', alignItems: 'flex-start' },
  imageBox: { width: '100%', aspectRatio: 1, borderRadius: 20, overflow: 'hidden', backgroundColor: colors.imageBackground },
  imageWide: { width: '48%' },
  image: { width: '100%', height: '100%', resizeMode: 'contain' },
  summary: { flex: 1, minWidth: 0, gap: 20 },
  category: { alignSelf: 'flex-start', backgroundColor: colors.primarySoft, color: colors.primary, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 8, overflow: 'hidden', fontSize: 12 },
  title: { fontSize: 26, lineHeight: 36, fontWeight: '700', color: colors.text },
  price: { fontSize: 32, fontWeight: '700', color: colors.text },
  currency: { fontSize: 17, fontWeight: '500' },
  seller: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 20, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colors.border },
  sellerText: { flex: 1, gap: 4 },
  caption: { fontSize: 12, lineHeight: 20, color: colors.muted },
  body: { fontSize: 14, lineHeight: 25, color: colors.secondary },
  section: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 18, padding: 24, gap: 18 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.text },
  empty: { flex: 1, minHeight: 220, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 18 },
});
