export const categories = ['전체', '디지털', '가구·인테리어', '패션', '생활·취미'] as const;
export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Exclude<Category, '전체'>;
  image: string;
};

// Initial screen fixtures. Replace with the product API when it is connected.
export const products: Product[] = [
  { id: '1', name: '소니 무선 노이즈 캔슬링 헤드폰', price: 180000, category: '디지털', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=85' },
  { id: '2', name: '따뜻한 원목 라운지 체어', price: 85000, category: '가구·인테리어', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop&q=85' },
  { id: '3', name: '후지필름 감성 미러리스 카메라', price: 420000, category: '디지털', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=85' },
  { id: '4', name: '매일 신기 좋은 뉴발란스 스니커즈', price: 65000, category: '패션', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=85' },
  { id: '5', name: '공간을 채우는 초록 식물', price: 18000, category: '가구·인테리어', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=85' },
  { id: '6', name: '핸드드립 커피 세트', price: 32000, category: '생활·취미', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=85' },
  { id: '7', name: '미니멀 아날로그 손목시계', price: 55000, category: '패션', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=85' },
  { id: '8', name: '주말을 위한 어쿠스틱 기타', price: 120000, category: '생활·취미', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&auto=format&fit=crop&q=85' },
];
