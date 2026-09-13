import { Text, View } from 'react-native';
import { sampleReviews } from '@/constants/productDetails';
import { styles } from './ProductReviews.ts';

export default function ProductReviews({ sample }: { sample: boolean }) {
  const reviews = sample ? sampleReviews : [];
  const average = reviews.length ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) : null;
  return (
    <View style={styles.section}>
      <Text accessibilityRole="header" style={styles.title}>상품 후기 <Text style={styles.count}>{reviews.length}</Text></Text>
      {sample && <Text style={styles.notice}>샘플 후기 · 실제 구매자가 작성한 후기가 아닙니다.</Text>}
      {average && <Text accessibilityLabel={`샘플 평균 평점 5점 만점에 ${average}점`} style={styles.average}>★ {average} <Text style={styles.note}>/ 5</Text></Text>}
      {reviews.length === 0 ? <Text style={styles.empty}>아직 등록된 후기가 없어요.</Text> : reviews.map((review) => (
        <View key={review.id} style={styles.review}>
          <View style={styles.heading}><Text style={styles.author}>{review.author}</Text><Text style={styles.note}>{review.date}</Text></View>
          <Text accessibilityLabel={`5점 만점에 ${review.rating}점`} style={styles.stars}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</Text>
          <Text style={styles.body}>{review.body}</Text>
        </View>
      ))}
    </View>
  );
}
