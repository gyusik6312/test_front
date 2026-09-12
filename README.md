# 모아 프런트엔드

Expo 54와 Expo Router 기반 상품 목록 화면입니다.

## 실행

```sh
npm install
npm run web
```

모바일 개발 서버는 `npm start`로 실행합니다.

## 구조

- `app/index.tsx`: 상품 목록 화면을 연결하는 라우트
- `screen/ProductListScreen.tsx`: 기능 컴포넌트를 조합하는 화면
- `components/search/`: 검색 UI와 검색·필터·정렬 상태 처리
- `components/categoryFilter/`: 카테고리 선택
- `components/productList/`: 상품 목록, 카드, 정렬 버튼, 빈 결과 표시
- `components/layout/`: 공통 화면 헤더
- `navigation/RootNavigator.tsx`: 내비게이션 설정
- `app/_layout.tsx`: 내비게이션 연결
- `constants/products.ts`: 샘플 상품 데이터와 타입
- `app.json`: Expo 설정

화면 파일은 `screen/기능명Screen.tsx`, 컴포넌트는 `components/기능명/컴포넌트명.tsx` 규칙으로 작성합니다. `app/`에는 Expo Router 라우트만 둡니다.

컴포넌트 스타일은 각 기능 폴더의 `styles/컴포넌트명.ts`에서 관리합니다. 화면 스타일은 `screen/styles/화면명.ts`에 둡니다. 공통 색상과 화면 너비는 `constants/design.ts`를 사용합니다.

현재 백엔드 서버는 없으며 샘플 데이터를 사용합니다. 상품 이미지는 외부 URL에서 불러옵니다.

## 검사

```sh
npx tsc --noEmit
npm run lint
```
