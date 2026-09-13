import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AccountActions from '@/components/mypage/AccountActions.tsx';
import MyProducts from '@/components/mypage/MyProducts.tsx';
import { colors } from '@/constants/design';
import { useTemporarySession } from '@/router/TemporarySession';
import { styles } from './MyPageScreen.ts';

export default function MyPageScreen() {
  const { user } = useTemporarySession();

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Link href="/" style={styles.back}>← 상품 목록으로</Link>
        <Text accessibilityRole="header" style={styles.title}>마이페이지</Text>
        <Text style={styles.description}>내 계정 정보를 확인하고 관리하세요.</Text>

        <View style={styles.profile}>
          <View style={styles.avatar}><Feather name="user" size={28} color={colors.primary} /></View>
          <View style={styles.account}>
            <Text style={styles.label}>로그인 계정</Text>
            <Text selectable style={styles.email}>{user?.email}</Text>
            <Text style={styles.badge}>임시 로그인</Text>
          </View>
        </View>

        <MyProducts />
        <Text accessibilityRole="header" style={styles.sectionTitle}>계정 관리</Text>
        <AccountActions />
      </ScrollView>
    </SafeAreaView>
  );
}
