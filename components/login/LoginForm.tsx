import { Feather } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { colors } from '@/constants/design';
import { useTemporarySession } from '@/router/TemporarySession';
import { styles } from './LoginForm.ts';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<'email' | 'password' | null>(null);
  const passwordInput = useRef<TextInput>(null);
  const { signIn } = useTemporarySession();
  const canSignIn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && password.length > 0;
  const handleSignIn = () => {
    if (canSignIn) signIn(email);
  };

  return (
    <View style={styles.form}>
      <View style={styles.field}>
        <Text style={styles.label}>이메일</Text>
        <View style={[styles.inputBox, focusedField === 'email' && styles.inputFocused]}>
          <Feather name="mail" size={18} color={colors.muted} />
          <TextInput
            accessibilityLabel="이메일" style={styles.input} value={email} onChangeText={setEmail}
            placeholder="example@email.com" placeholderTextColor={colors.muted}
            keyboardType="email-address" autoCapitalize="none" autoCorrect={false}
            autoComplete="email" textContentType="emailAddress" returnKeyType="next"
            onSubmitEditing={() => passwordInput.current?.focus()}
            onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
          />
        </View>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>비밀번호</Text>
        <View style={[styles.inputBox, focusedField === 'password' && styles.inputFocused]}>
          <Feather name="lock" size={18} color={colors.muted} />
          <TextInput
            ref={passwordInput} accessibilityLabel="비밀번호" style={styles.input}
            value={password} onChangeText={setPassword} placeholder="비밀번호를 입력해 주세요"
            placeholderTextColor={colors.muted} secureTextEntry={!passwordVisible}
            autoCapitalize="none" autoCorrect={false} autoComplete="current-password" textContentType="password"
            returnKeyType="go" onSubmitEditing={handleSignIn}
            onFocus={() => setFocusedField('password')} onBlur={() => setFocusedField(null)}
          />
          <Pressable
            accessibilityRole="button" accessibilityLabel={passwordVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
            onPress={() => setPasswordVisible((visible) => !visible)}
            style={({ pressed }) => [styles.visibilityButton, pressed && styles.pressed]}
          >
            <Feather name={passwordVisible ? 'eye-off' : 'eye'} size={18} color={colors.secondary} />
          </Pressable>
        </View>
      </View>
      <Pressable onPress={handleSignIn} disabled={!canSignIn} accessibilityRole="button" accessibilityState={{ disabled: !canSignIn }} style={({ pressed }) => [styles.loginButton, !canSignIn && styles.disabled, pressed && styles.pressed]}>
        <Text style={styles.loginButtonText}>로그인</Text>
        <Feather name="arrow-right" size={18} color="#FFFFFF" />
      </Pressable>
      <Text style={styles.notice}>임시 로그인입니다. 이메일 형식과 임의의 비밀번호를 입력해 주세요. 실제 계정 인증은 진행하지 않아요.</Text>
    </View>
  );
}
