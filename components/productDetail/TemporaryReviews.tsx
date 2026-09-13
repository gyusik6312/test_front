import { createContext, useContext, useRef, useState, type ReactNode } from 'react';
import { useTemporaryProducts } from '@/components/productList/TemporaryProducts';
import { useTemporarySession } from '@/router/TemporarySession';

export type ReviewDraft = { title: string; rating: number; body: string; photos: string[] };
export type Review = ReviewDraft & { id: string; productId: string; author: string; date: string };
const Context = createContext<{ reviews: Review[]; add: (productId: string, draft: ReviewDraft) => boolean } | null>(null);

export function TemporaryReviewsProvider({ children }: { children: ReactNode }) {
  const { user } = useTemporarySession();
  const { products } = useTemporaryProducts();
  const [reviews, setReviews] = useState<Review[]>([]);
  const sequence = useRef(0);
  const add = (productId: string, draft: ReviewDraft) => {
    const product = products.find((item) => item.id === productId);
    if (!user || !product || product.ownerEmail?.toLowerCase() === user.email.toLowerCase()) return false;
    if (!draft.title.trim() || draft.title.trim().length > 100 || !Number.isInteger(draft.rating) || draft.rating < 1 || draft.rating > 5 || draft.photos.length > 3) return false;
    const review = { ...draft, title: draft.title.trim(), body: draft.body.trim(), productId, id: `review-${Date.now()}-${++sequence.current}`, author: user.email.split('@')[0], date: new Date().toLocaleDateString('ko-KR') };
    setReviews((current) => [review, ...current]);
    return true;
  };
  return <Context.Provider value={{ reviews, add }}>{children}</Context.Provider>;
}

export function useTemporaryReviews() {
  const value = useContext(Context);
  if (!value) throw new Error('TemporaryReviewsProvider is required');
  return value;
}
