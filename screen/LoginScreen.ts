import { StyleSheet } from 'react-native';
import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  keyboard: { flex: 1 },
  content: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 32 },
  back: { width: '100%', maxWidth: 440, paddingVertical: 14, marginBottom: 24, fontSize: 13, color: colors.secondary },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandIcon: { padding: 10, borderRadius: 14, backgroundColor: colors.primary },
  brandName: { fontSize: 32, fontWeight: '800', letterSpacing: -1.5, color: colors.text },
  tagline: { marginTop: 12, marginBottom: 32, fontSize: 13, color: colors.muted },
  card: { width: '100%', maxWidth: 440, padding: 28, backgroundColor: colors.surface, borderRadius: 24, borderWidth: 1, borderColor: colors.border, boxShadow: '0 8px 32px rgba(29, 48, 39, 0.04)' },
  welcomeIcon: { width: 52, height: 52, borderRadius: 18, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center', marginBottom: 22 },
  title: { fontSize: 25, fontWeight: '700', color: colors.text, letterSpacing: -0.8 },
  description: { marginTop: 10, fontSize: 14, lineHeight: 22, color: colors.secondary, marginBottom: 30 },
  footer: { marginTop: 30, fontSize: 12, color: colors.muted, textAlign: 'center' },
  copyright: { marginTop: 10, fontSize: 11, color: colors.muted },
});
