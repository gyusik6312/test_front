import { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories, type Product } from '@/constants/products';
import { useTemporaryProducts, type OwnedProduct } from '@/components/productList/TemporaryProducts';
import { styles } from './ProductEditor.ts';

export default function ProductEditor({ product, onClose }: { product: OwnedProduct | null; onClose: () => void }) {
  const { save, remove } = useTemporaryProducts();
  const [name, setName] = useState(product?.name ?? '');
  const [price, setPrice] = useState(product ? String(product.price) : '');
  const [category, setCategory] = useState<Product['category']>(product?.category ?? '디지털');
  const [description, setDescription] = useState(product?.description ?? '');
  const [image, setImage] = useState(product?.image ?? '');
  const [error, setError] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const submit = () => {
    if (!name.trim()) return setError('상품명을 입력해 주세요.');
    if (!/^\d+$/.test(price) || !Number.isSafeInteger(Number(price))) return setError('가격은 0 이상의 정수로 입력해 주세요.');
    if (image.trim()) {
      try { if (new URL(image.trim()).protocol !== 'https:') throw new Error(); }
      catch { return setError('이미지 주소는 https://로 시작하는 올바른 URL을 입력해 주세요.'); }
    }
    if (save({ name: name.trim(), price: Number(price), category, description: description.trim(), image: image.trim() }, product?.id)) onClose();
    else setError('수정할 상품을 찾을 수 없습니다. 목록을 다시 확인해 주세요.');
  };

  return (
    <Modal visible animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
            <View style={styles.heading}>
              <Text accessibilityRole="header" style={styles.title}>{product ? '상품 수정' : '상품 등록'}</Text>
              <Pressable accessibilityRole="button" onPress={onClose} style={styles.close}><Text style={styles.secondaryText}>취소</Text></Pressable>
            </View>
            <Text style={styles.label}>상품명 *</Text>
            <TextInput accessibilityLabel="상품명" value={name} onChangeText={setName} maxLength={100} placeholder="상품명을 입력해 주세요" style={styles.input} />
            <Text style={styles.label}>가격 (원) *</Text>
            <TextInput accessibilityLabel="가격" value={price} onChangeText={setPrice} keyboardType="number-pad" maxLength={15} placeholder="0" style={styles.input} />
            <Text style={styles.label}>카테고리</Text>
            <View style={styles.categories}>
              {categories.filter((item) => item !== '전체').map((item) => (
                <Pressable key={item} accessibilityRole="button" accessibilityState={{ selected: category === item }} onPress={() => setCategory(item)} style={[styles.chip, category === item && styles.selected]}>
                  <Text style={category === item ? styles.whiteText : styles.secondaryText}>{item}</Text>
                </Pressable>
              ))}
            </View>
            <Text style={styles.label}>상품 설명</Text>
            <TextInput accessibilityLabel="상품 설명" value={description} onChangeText={setDescription} maxLength={2000} multiline placeholder="상품 상태와 거래 정보를 적어 주세요" style={[styles.input, styles.multiline]} />
            <Text style={styles.label}>이미지 URL (선택)</Text>
            <TextInput accessibilityLabel="이미지 URL" value={image} onChangeText={setImage} autoCapitalize="none" autoCorrect={false} keyboardType="url" placeholder="https://..." style={styles.input} />
            {!!error && <Text accessibilityRole="alert" style={styles.error}>{error}</Text>}
            <Pressable accessibilityRole="button" onPress={submit} style={styles.save}><Text style={styles.whiteText}>{product ? '수정 완료' : '상품 등록'}</Text></Pressable>
            {product && <Pressable accessibilityRole="button" onPress={() => setConfirmDelete(true)} style={styles.close}><Text style={styles.error}>상품 삭제</Text></Pressable>}
            {confirmDelete && product && (
              <View style={styles.confirm}>
                <Text style={styles.label}>이 상품을 삭제할까요?</Text>
                <Text style={styles.secondaryText}>삭제한 상품은 목록에서 사라지며 복구할 수 없습니다.</Text>
                <View style={styles.categories}>
                  <Pressable accessibilityRole="button" onPress={() => setConfirmDelete(false)} style={styles.close}><Text style={styles.secondaryText}>취소</Text></Pressable>
                  <Pressable accessibilityRole="button" onPress={() => { if (remove(product.id)) onClose(); else setError('삭제할 상품을 찾을 수 없습니다.'); }} style={styles.close}><Text style={styles.error}>삭제 확인</Text></Pressable>
                </View>
              </View>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}
