import { styles } from './styles/MarketHeader';
import { Feather } from '@expo/vector-icons';
import { Text, useWindowDimensions, View } from 'react-native';


export default function MarketHeader() {
  const wide = useWindowDimensions().width >= 760;
  return (
    <View style={styles.header}>
      <View style={[styles.headerInner, !wide && styles.mobilePadding]}>
        <View style={styles.brand}><View style={styles.brandIcon}><Feather name="box" size={22} color="#fff" /></View><Text style={styles.brandName}>모아<Text style={styles.brandDot}>.</Text></Text></View>
        <Text style={styles.headerNote}>{wide ? '좋은 물건이 다시 만나는 곳' : '취향을 잇는 마켓'}</Text>
      </View>
    </View>
  );
}
