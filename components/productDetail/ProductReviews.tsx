import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import type { Product } from '@/constants/products';
import { useTemporarySession } from '@/router/TemporarySession';
import { useTemporaryReviews, type Review } from './TemporaryReviews';
import ReviewForm from './ReviewForm.tsx';
import { sampleReviews } from '@/constants/productDetails';
import { styles } from './ProductReviews.ts';

export default function ProductReviews({ product, sample }: { product: Product; sample: boolean }) {
  const { user } = useTemporarySession();
  const { reviews: saved, remove } = useTemporaryReviews();
  const [writing, setWriting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const canWrite = !!user && product.ownerEmail?.toLowerCase() !== user.email.toLowerCase();
  const examples: Review[] = sample ? sampleReviews.map((review) => ({ ...review, title: '샘플 후기', photos: [], productId: product.id })) : [];
  const reviews = [...saved.filter((review) => review.productId === product.id), ...examples];
  const average = reviews.length ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) : null;
  return (
    <View style={styles.section}>
      <Text accessibilityRole="header" style={styles.title}>상품 후기 <Text style={styles.count}>{reviews.length}</Text></Text>
      {canWrite && !writing && <Pressable accessibilityRole="button" onPress={() => { setWriting(true); setEditingId(null); setDeletingId(null); setError(''); }} style={styles.writeButton}><Text style={styles.writeText}>후기 작성</Text></Pressable>}
      {!canWrite && <Text style={styles.notice}>본인이 등록한 상품에는 후기를 작성할 수 없습니다.</Text>}
      {canWrite && writing && <ReviewForm productId={product.id} onClose={() => setWriting(false)} />}
      {sample && <Text style={styles.notice}>샘플 후기 · 실제 구매자가 작성한 후기가 아닙니다.</Text>}
      {!!error && <Text accessibilityRole="alert" style={styles.error}>{error}</Text>}
      {average && <Text accessibilityLabel={`평균 평점 5점 만점에 ${average}점`} style={styles.average}>★ {average} <Text style={styles.note}>/ 5</Text></Text>}
      {reviews.length === 0 ? <Text style={styles.empty}>아직 등록된 후기가 없어요.</Text> : reviews.map((review) => (
        <View key={review.id} style={styles.review}>
          <View style={styles.heading}><Text style={styles.author}>{review.author}</Text><Text style={styles.note}>{review.date}</Text></View>
          <Text accessibilityLabel={`5점 만점에 ${review.rating}점`} style={styles.stars}>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</Text>
          <Text style={styles.author}>{review.title}</Text>
          <Text style={styles.body}>{review.body}</Text>
          <View style={styles.photos}>{review.photos.map((uri, index) => <Image key={`${uri}-${index}`} source={{ uri }} style={styles.photo} accessibilityLabel={`${review.title} 사진 ${index + 1}`} />)}</View>
          {!!user && review.authorEmail === user.email.toLowerCase() && (
            <>
              <View style={styles.photos}>
                <Pressable accessibilityRole="button" accessibilityLabel={`${review.title} 수정`} style={styles.action} onPress={() => { setEditingId(review.id); setWriting(false); setDeletingId(null); setError(''); }}><Text style={styles.author}>수정</Text></Pressable>
                <Pressable accessibilityRole="button" accessibilityLabel={`${review.title} 삭제`} style={styles.action} onPress={() => { setDeletingId(review.id); setEditingId(null); setWriting(false); setError(''); }}><Text style={styles.error}>삭제</Text></Pressable>
              </View>
              {editingId === review.id && <ReviewForm key={review.id} productId={product.id} review={review} onClose={() => setEditingId(null)} />}
              {deletingId === review.id && <View style={styles.confirm}>
                <Text style={styles.body}>이 후기를 삭제할까요? 삭제한 후기는 복구할 수 없습니다.</Text>
                <View style={styles.photos}>
                  <Pressable accessibilityRole="button" style={styles.action} onPress={() => setDeletingId(null)}><Text style={styles.author}>취소</Text></Pressable>
                  <Pressable accessibilityRole="button" style={styles.action} onPress={() => { if (!remove(review.id)) setError('후기를 삭제할 수 없습니다. 작성자 정보를 확인해 주세요.'); setDeletingId(null); }}><Text style={styles.error}>삭제 확인</Text></Pressable>
                </View>
              </View>}
            </>
          )}
        </View>
      ))}
    </View>
  );
}
