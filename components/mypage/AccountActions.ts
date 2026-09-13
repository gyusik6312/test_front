import { StyleSheet } from 'react-native';
import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  card: { borderRadius: 16, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, overflow: 'hidden' },
  row: { minHeight: 68, paddingHorizontal: 20, paddingVertical: 18, flexDirection: 'row', alignItems: 'center', gap: 12 },
  divider: { borderBottomWidth: 1, borderBottomColor: colors.border },
  pressed: { backgroundColor: colors.background },
  label: { flex: 1, fontSize: 14, fontWeight: '500', color: colors.text },
  withdrawal: { color: '#AE4949' },
  badge: { fontSize: 11, color: colors.muted },
  notice: { marginTop: 14, flexDirection: 'row', alignItems: 'center', paddingLeft: 16, paddingRight: 6, paddingVertical: 10, borderRadius: 12, backgroundColor: colors.primarySoft },
  noticeText: { flex: 1, fontSize: 13, lineHeight: 21, color: colors.secondary },
  close: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
});
