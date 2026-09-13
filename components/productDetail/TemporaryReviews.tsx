import { createContext, useContext, useRef, useState, type ReactNode } from 'react';
import { useTemporaryProducts } from '@/components/productList/TemporaryProducts';
import { useTemporarySession } from '@/router/TemporarySession';

export type ReviewDraft = { title: string; rating: number; body: string; photos: string[] };
export type Review = ReviewDraft & { id: string; productId: string; author: string; authorEmail?: string; date: string };
const Context = createContext<{ reviews: Review[]; add: (productId: string, draft: ReviewDraft) => boolean; update: (id: string, draft: ReviewDraft) => boolean; remove: (id: string) => boolean } | null>(null);
const validDraft = (draft: ReviewDraft) => !!draft.title.trim() && draft.title.trim().length <= 100 && draft.body.length <= 2000 && Number.isInteger(draft.rating) && draft.rating >= 1 && draft.rating <= 5 && draft.photos.length <= 3;

export function TemporaryReviewsProvider({ children }: { children: ReactNode }) {
  const { user } = useTemporarySession();
  const { products } = useTemporaryProducts();
  const [reviews, setReviews] = useState<Review[]>([]);
  const sequence = useRef(0);
  const add = (productId: string, draft: ReviewDraft) => {
    const product = products.find((item) => item.id === productId);
    if (!user || !product || product.ownerEmail?.toLowerCase() === user.email.toLowerCase()) return false;
    if (!validDraft(draft)) return false;
    const review = { ...draft, title: draft.title.trim(), body: draft.body.trim(), productId, id: `review-${Date.now()}-${++sequence.current}`, author: user.email.split('@')[0], authorEmail: user.email.toLowerCase(), date: new Date().toLocaleDateString('ko-KR') };
    setReviews((current) => [review, ...current]);
    return true;
  };
  const isMine = (review: Review) => !!user && review.authorEmail === user.email.toLowerCase();
  const update = (id: string, draft: ReviewDraft) => {
    const review = reviews.find((item) => item.id === id);
    if (!review || !isMine(review) || !validDraft(draft) || !products.some((item) => item.id === review.productId)) return false;
    setReviews((current) => current.map((item) => item.id === id && isMine(item) ? { ...item, ...draft, title: draft.title.trim(), body: draft.body.trim() } : item));
    return true;
  };
  const remove = (id: string) => {
    if (!reviews.some((item) => item.id === id && isMine(item))) return false;
    setReviews((current) => current.filter((item) => !(item.id === id && isMine(item))));
    return true;
  };
  return <Context.Provider value={{ reviews, add, update, remove }}>{children}</Context.Provider>;
}

export function useTemporaryReviews() {
  const value = useContext(Context);
  if (!value) throw new Error('TemporaryReviewsProvider is required');
  return value;
}
