import { StyleSheet } from 'react-native';
import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { width: '100%', maxWidth: 680, alignSelf: 'center', padding: 20, paddingBottom: 48, gap: 12 },
  heading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  label: { fontSize: 14, fontWeight: '600', color: colors.text, marginTop: 8 },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 12, backgroundColor: colors.surface, padding: 15, minHeight: 50, fontSize: 14, color: colors.text },
  multiline: { minHeight: 120, textAlignVertical: 'top' },
  categories: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 14, borderRadius: 22, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface },
  selected: { backgroundColor: colors.primary, borderColor: colors.primary },
  whiteText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  secondaryText: { color: colors.secondary, fontSize: 13, lineHeight: 20 },
  save: { minHeight: 52, marginTop: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 12, backgroundColor: colors.primary },
  close: { padding: 14, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  error: { color: '#AE4949', fontSize: 13, lineHeight: 20 },
  confirm: { borderWidth: 1, borderColor: '#E8C5C5', borderRadius: 12, padding: 16, gap: 12, backgroundColor: '#FFF8F8' },
});
