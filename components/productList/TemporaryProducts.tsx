import { createContext, useContext, useRef, useState, type ReactNode } from 'react';
import { products as samples, type Product } from '@/constants/products';
import { useTemporarySession } from '@/router/TemporarySession';

export type OwnedProduct = Product & { ownerEmail: string; description: string };
export type ProductDraft = Omit<OwnedProduct, 'id' | 'ownerEmail'>;
type Store = {
  products: Product[];
  myProducts: OwnedProduct[];
  save: (draft: ProductDraft, id?: string) => boolean;
  remove: (id: string) => boolean;
};
const Context = createContext<Store | null>(null);

export function TemporaryProductsProvider({ children }: { children: ReactNode }) {
  const { user } = useTemporarySession();
  const [items, setItems] = useState<OwnedProduct[]>([]);
  const sequence = useRef(0);
  const owner = user?.email.toLowerCase();
  const myProducts = items.filter((item) => item.ownerEmail === owner);

  const save = (draft: ProductDraft, id?: string) => {
    if (!owner || (id && !myProducts.some((item) => item.id === id))) return false;
    if (id) {
      setItems((current) => current.map((item) => item.id === id && item.ownerEmail === owner ? { ...item, ...draft } : item));
    } else {
      const item = { ...draft, id: `local-${Date.now()}-${++sequence.current}`, ownerEmail: owner };
      setItems((current) => [item, ...current]);
    }
    return true;
  };
  const remove = (id: string) => {
    if (!owner || !myProducts.some((item) => item.id === id)) return false;
    setItems((current) => current.filter((item) => !(item.id === id && item.ownerEmail === owner)));
    return true;
  };

  return <Context.Provider value={{ products: [...items, ...samples], myProducts, save, remove }}>{children}</Context.Provider>;
}

export function useTemporaryProducts() {
  const store = useContext(Context);
  if (!store) throw new Error('TemporaryProductsProvider is required');
  return store;
}
