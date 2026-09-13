import { StyleSheet } from 'react-native';
import { colors } from '@/constants/design';
export const styles = StyleSheet.create({
  form: { gap: 12, paddingVertical: 16, borderTopWidth: 1, borderColor: colors.border },
  label: { fontSize: 13, fontWeight: '600', color: colors.text },
  input: { minHeight: 48, padding: 14, borderWidth: 1, borderColor: colors.border, borderRadius: 10, fontSize: 14, color: colors.text, backgroundColor: colors.background },
  multiline: { minHeight: 100, textAlignVertical: 'top' },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  starButton: { minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' },
  star: { fontSize: 30, color: colors.primary },
  photo: { width: 88, height: 88, borderRadius: 10 },
  button: { alignSelf: 'flex-start', minHeight: 44, padding: 13, borderRadius: 10, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  primary: { backgroundColor: colors.primary },
  white: { color: '#fff', fontWeight: '600' },
  disabled: { opacity: 0.5 },
  error: { fontSize: 13, color: '#AE4949' },
});
