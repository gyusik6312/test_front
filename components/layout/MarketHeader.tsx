import { styles } from './MarketHeader.ts';
import { Feather } from '@expo/vector-icons';
import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { useTemporarySession } from '@/router/TemporarySession';


export default function MarketHeader() {
  const wide = useWindowDimensions().width >= 760;
  const { user, signOut } = useTemporarySession();
  return (
    <View style={styles.header}>
      <View style={[styles.headerInner, !wide && styles.mobilePadding]}>
        <View style={styles.brand}><View style={styles.brandIcon}><Feather name="box" size={22} color="#fff" /></View><Text style={styles.brandName}>모아<Text style={styles.brandDot}>.</Text></Text></View>
        <View style={styles.actions}>
          <Text numberOfLines={1} style={styles.headerNote} accessibilityLabel={`로그인 계정 ${user?.email}`}>{user?.email}</Text>
          <Pressable accessibilityRole="button" onPress={signOut}><Text style={styles.loginLink}>로그아웃</Text></Pressable>
        </View>
      </View>
    </View>
  );
}
