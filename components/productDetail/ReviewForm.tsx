import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { useTemporaryReviews, type Review } from './TemporaryReviews';
import { styles } from './ReviewForm.ts';

export default function ReviewForm({ productId, review, onClose }: { productId: string; review?: Review; onClose: () => void }) {
  const { add, update } = useTemporaryReviews();
  const [title, setTitle] = useState(review?.title ?? '');
  const [body, setBody] = useState(review?.body ?? '');
  const [rating, setRating] = useState(review?.rating ?? 0);
  const [photos, setPhotos] = useState<string[]>(review?.photos ?? []);
  const [error, setError] = useState('');
  const [picking, setPicking] = useState(false);
  const pick = async () => {
    if (picking || photos.length >= 3) return;
    setPicking(true);
    setError('');
    try {
      const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 0.7 });
      if (!result.canceled && result.assets[0]) {
        const asset = result.assets[0];
        if (asset.fileSize && asset.fileSize > 10 * 1024 * 1024) setError('사진은 한 장당 10MB 이하로 선택해 주세요.');
        else setPhotos((current) => [...current, asset.uri].slice(0, 3));
      }
    } catch { setError('사진을 불러오지 못했습니다. 사진 접근 권한을 확인한 후 다시 선택해 주세요.'); }
    finally { setPicking(false); }
  };
  const submit = () => {
    if (!title.trim()) return setError('후기 제목을 입력해 주세요.');
    if (!rating) return setError('별점을 선택해 주세요.');
    const draft = { title, body, rating, photos };
    if (review ? update(review.id, draft) : add(productId, draft)) onClose();
    else setError('후기를 저장할 수 없습니다. 작성 권한이나 상품·후기 삭제 여부를 확인해 주세요.');
  };
  return (
    <View style={styles.form}>
      <Text style={styles.label}>후기 제목 *</Text>
      <TextInput accessibilityLabel="후기 제목" value={title} onChangeText={setTitle} maxLength={100} placeholder="상품에 대한 한 줄 후기를 남겨 주세요" style={styles.input} />
      <Text style={styles.label}>별점 * {rating ? `${rating}점` : ''}</Text>
      <View style={styles.row}>{[1, 2, 3, 4, 5].map((value) => <Pressable key={value} accessibilityRole="button" accessibilityLabel={`${value}점`} accessibilityState={{ selected: rating === value }} onPress={() => setRating(value)} style={styles.starButton}><Text style={styles.star}>{value <= rating ? '★' : '☆'}</Text></Pressable>)}</View>
      <Text style={styles.label}>후기 내용 (선택)</Text>
      <TextInput accessibilityLabel="후기 내용" value={body} onChangeText={setBody} maxLength={2000} multiline placeholder="사용하면서 느낀 점을 알려 주세요" style={[styles.input, styles.multiline]} />
      <Text style={styles.label}>사진 (선택, 최대 3장)</Text>
      <View style={styles.row}>{photos.map((uri, index) => <View key={`${uri}-${index}`}><Image source={{ uri }} style={styles.photo} accessibilityLabel={`첨부 사진 ${index + 1}`} /><Pressable accessibilityRole="button" accessibilityLabel={`사진 ${index + 1} 삭제`} onPress={() => setPhotos((current) => current.filter((_, i) => i !== index))} style={styles.button}><Text>삭제</Text></Pressable></View>)}</View>
      <Pressable accessibilityRole="button" disabled={picking || photos.length >= 3} onPress={pick} style={[styles.button, (picking || photos.length >= 3) && styles.disabled]}><Text>{picking ? '사진 선택 중…' : `사진 추가 (${photos.length}/3)`}</Text></Pressable>
      {!!error && <Text accessibilityRole="alert" style={styles.error}>{error}</Text>}
      <View style={styles.row}>
        <Pressable accessibilityRole="button" onPress={onClose} style={styles.button}><Text>취소</Text></Pressable>
        <Pressable accessibilityRole="button" disabled={picking} onPress={submit} style={[styles.button, styles.primary, picking && styles.disabled]}><Text style={styles.white}>{review ? '수정 완료' : '후기 등록'}</Text></Pressable>
      </View>
    </View>
  );
}
