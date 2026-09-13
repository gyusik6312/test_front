import { StyleSheet } from 'react-native';
import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { width: '100%', maxWidth: 680, alignSelf: 'center', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 48 },
  back: { alignSelf: 'flex-start', paddingVertical: 14, fontSize: 13, color: colors.secondary, marginBottom: 22 },
  title: { fontSize: 28, fontWeight: '700', letterSpacing: -0.8, color: colors.text },
  description: { marginTop: 10, fontSize: 14, lineHeight: 22, color: colors.secondary },
  profile: { marginTop: 28, marginBottom: 36, padding: 24, flexDirection: 'row', alignItems: 'center', gap: 18, borderRadius: 20, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface },
  avatar: { width: 60, height: 60, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primarySoft },
  account: { flex: 1, minWidth: 0, gap: 8 },
  label: { fontSize: 12, color: colors.secondary },
  email: { fontSize: 16, lineHeight: 24, fontWeight: '600', color: colors.text },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 9, paddingVertical: 4, borderRadius: 6, overflow: 'hidden', fontSize: 11, color: colors.primary, backgroundColor: colors.primarySoft },
  sectionTitle: { marginBottom: 14, fontSize: 16, fontWeight: '600', color: colors.text },
});
