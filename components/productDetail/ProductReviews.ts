import { StyleSheet } from 'react-native';
import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  action: { minHeight: 44, paddingHorizontal: 16, justifyContent: 'center', borderRadius: 8, backgroundColor: colors.background },
  error: { fontSize: 13, lineHeight: 20, color: '#AE4949' },
  confirm: { padding: 16, gap: 12, borderRadius: 12, backgroundColor: '#FFF4F4' },
  writeButton: { alignSelf: 'flex-start', padding: 14, minHeight: 44, borderRadius: 10, backgroundColor: colors.primary },
  writeText: { color: '#fff', fontSize: 13, fontWeight: '600' },
  photos: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  photo: { width: 88, height: 88, borderRadius: 10 },
  section: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 18, padding: 24, gap: 16 },
  title: { fontSize: 18, fontWeight: '700', color: colors.text },
  count: { color: colors.primary },
  notice: { fontSize: 12, lineHeight: 20, color: colors.muted },
  average: { fontSize: 28, fontWeight: '700', color: colors.primary },
  note: { fontSize: 12, color: colors.muted },
  review: { borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 18, gap: 10 },
  heading: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8 },
  author: { fontSize: 13, fontWeight: '600', color: colors.text },
  stars: { color: colors.primary, fontSize: 16 },
  body: { fontSize: 14, lineHeight: 24, color: colors.secondary },
  empty: { paddingVertical: 24, textAlign: 'center', color: colors.muted, fontSize: 14 },
});
