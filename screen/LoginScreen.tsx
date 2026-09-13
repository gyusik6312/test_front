import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LoginForm from '@/components/login/LoginForm.tsx';
import { colors } from '@/constants/design';
import { styles } from './LoginScreen.ts';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.brand}>
            <View style={styles.brandIcon}><Feather name="box" size={25} color="#fff" /></View>
            <Text style={styles.brandName}>모아<Text style={styles.brandDot}>.</Text></Text>
          </View>
          <Text style={styles.tagline}>취향과 취향 사이, 모아</Text>
          <View style={styles.card}>
            <View style={styles.welcomeIcon}><Feather name="smile" size={26} color={colors.primary} /></View>
            <Text accessibilityRole="header" style={styles.title}>다시 만나 반가워요</Text>
            <Text style={styles.description}>로그인하고 나의 취향을 이어가세요.</Text>
            <LoginForm />
          </View>
          <Text style={styles.footer}>물건의 다음 이야기가 시작되는 곳</Text>
          <Text style={styles.copyright}>© 모아</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
