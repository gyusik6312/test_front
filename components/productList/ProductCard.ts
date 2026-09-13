import { StyleSheet } from 'react-native';

import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  card: { flex: 1, marginBottom: 24, padding: 8, borderWidth: 1, borderColor: colors.border, borderRadius: 18, backgroundColor: colors.surface, boxShadow: '0 2px 8px rgba(29, 48, 39, 0.025)' },
  imageBox: { aspectRatio: 1, backgroundColor: colors.imageBackground, borderRadius: 11, overflow: 'hidden' },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  imageFallback: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  fallbackText: { color: colors.secondary, fontSize: 11, textAlign: 'center', paddingHorizontal: 8 },
  productName: { marginTop: 13, marginHorizontal: 4, color: colors.secondary, fontSize: 14, lineHeight: 21, minHeight: 42 },
  price: { marginTop: 8, marginHorizontal: 4, marginBottom: 8, color: colors.text, fontSize: 20, lineHeight: 26, fontWeight: '700', letterSpacing: -0.6 },
  won: { fontSize: 13, fontWeight: '500' },
});
