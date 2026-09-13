import { StyleSheet } from 'react-native';

import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  hero: { marginTop: 32, borderRadius: 24, paddingHorizontal: 40, paddingVertical: 36, backgroundColor: colors.primarySoft, borderWidth: 1, borderColor: '#DDEADF', alignItems: 'center' },
  heroMobile: { marginTop: 20, paddingVertical: 28, paddingHorizontal: 18, borderRadius: 20 },
  eyebrow: { flexDirection: 'row', gap: 7, alignItems: 'center', marginBottom: 14, backgroundColor: '#F7FBF8', paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: colors.primary },
  eyebrowText: { fontSize: 11, fontWeight: '600', color: colors.primary, letterSpacing: 0.5 },
  title: { fontSize: 34, lineHeight: 47, fontWeight: '700', letterSpacing: -1.3, color: colors.text, textAlign: 'center' },
  titleMobile: { fontSize: 25, lineHeight: 36, letterSpacing: -1 },
  subtitle: { fontSize: 13, color: colors.secondary, marginTop: 12, lineHeight: 21, textAlign: 'center' },
});
