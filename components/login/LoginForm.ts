import { StyleSheet } from 'react-native';
import { colors } from '@/constants/design';

export const styles = StyleSheet.create({
  form: { gap: 20 },
  field: { gap: 9 },
  label: { fontSize: 13, fontWeight: '600', color: colors.text },
  inputBox: { flexDirection: 'row', alignItems: 'center', minHeight: 54, gap: 10, paddingLeft: 15, paddingRight: 5, backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border, borderRadius: 12 },
  inputFocused: { borderColor: colors.primary, backgroundColor: colors.surface, boxShadow: '0 0 0 3px rgba(33, 107, 80, 0.08)' },
  input: { flex: 1, minWidth: 0, paddingVertical: 16, fontSize: 14, color: colors.text, outlineWidth: 0 },
  visibilityButton: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
  pressed: { opacity: 0.6 },
  disabled: { opacity: 0.65 },
  loginButton: { marginTop: 8, minHeight: 54, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, backgroundColor: colors.primary, borderRadius: 12 },
  loginButtonText: { fontSize: 15, fontWeight: '600', color: '#FFFFFF' },
  notice: { fontSize: 12, lineHeight: 18, color: colors.muted, textAlign: 'center' },
});
