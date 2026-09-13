import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/design';
import { useTemporarySession } from '@/router/TemporarySession';
import { styles } from './AccountActions.ts';

export default function AccountActions() {
  const { signOut } = useTemporarySession();
  const [showWithdrawalNotice, setShowWithdrawalNotice] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Pressable accessibilityRole="button" onPress={signOut} style={({ pressed }) => [styles.row, styles.divider, pressed && styles.pressed]}>
          <Feather name="log-out" size={20} color={colors.secondary} />
          <Text style={styles.label}>로그아웃</Text>
          <Feather name="chevron-right" size={18} color={colors.muted} />
        </Pressable>
        <Pressable
          accessibilityRole="button" accessibilityHint="회원탈퇴 준비 중 안내를 표시합니다"
          onPress={() => setShowWithdrawalNotice(true)}
          style={({ pressed }) => [styles.row, pressed && styles.pressed]}
        >
          <Feather name="user-minus" size={20} color="#AE4949" />
          <Text style={[styles.label, styles.withdrawal]}>회원탈퇴</Text>
          <Text style={styles.badge}>준비 중</Text>
          <Feather name="chevron-right" size={18} color={colors.muted} />
        </Pressable>
      </View>
      {showWithdrawalNotice && (
        <View style={styles.notice}>
          <Text accessibilityLiveRegion="polite" style={styles.noticeText}>회원탈퇴 기능은 준비 중입니다. 현재 계정과 데이터는 변경되지 않습니다.</Text>
          <Pressable accessibilityRole="button" accessibilityLabel="회원탈퇴 안내 닫기" onPress={() => setShowWithdrawalNotice(false)} style={styles.close}>
            <Feather name="x" size={18} color={colors.secondary} />
          </Pressable>
        </View>
      )}
    </View>
  );
}
