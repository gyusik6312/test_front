import { StyleSheet } from 'react-native';
import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  section: { marginBottom: 32, gap: 12 },
  heading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  title: { fontSize: 18, fontWeight: '700', color: colors.text },
  count: { color: colors.primary },
  add: { backgroundColor: colors.primary, borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14 },
  addText: { color: '#fff', fontSize: 13, fontWeight: '600' },
  empty: { padding: 28, alignItems: 'center', gap: 12, backgroundColor: colors.surface, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  emptyTitle: { fontSize: 15, fontWeight: '600', color: colors.text },
  note: { fontSize: 12, lineHeight: 19, color: colors.secondary },
  item: { flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 16, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, gap: 14 },
  thumbnail: { width: 76, height: 76, flexShrink: 0, borderRadius: 12, overflow: 'hidden', backgroundColor: colors.imageBackground },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  imageFallback: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 6 },
  imageFallbackText: { fontSize: 10, color: colors.muted },
  info: { flex: 1, minWidth: 0, gap: 8 },
  name: { fontSize: 16, fontWeight: '600', color: colors.text },
  price: { fontSize: 15, fontWeight: '700', color: colors.primary },
  pressed: { opacity: 0.7 },
  notice: { fontSize: 11, lineHeight: 18, color: colors.muted },
});
