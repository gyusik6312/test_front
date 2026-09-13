// Display fixtures only; these are not verified product details or real reviews.
export const sampleDetails: Record<string, { description: string; condition: string }> = {
  '1': { description: '음악 감상과 일상 사용을 위한 무선 헤드폰입니다.\n이어패드와 헤드밴드 상태를 확인하고 거래해 주세요.', condition: '사용감 적음' },
  '2': { description: '거실이나 독서 공간에 두기 좋은 라운지 체어입니다.\n부피가 있는 가구이므로 크기와 운반 방법을 거래 전에 확인해 주세요.', condition: '생활 사용감 있음' },
  '3': { description: '일상과 여행의 순간을 담기 좋은 미러리스 카메라입니다.\n렌즈 포함 여부, 촬영 상태와 구성품을 거래 전에 확인해 주세요.', condition: '사용감 적음' },
  '4': { description: '데일리 코디에 활용하기 좋은 스니커즈입니다.\n사이즈와 밑창 마모 상태를 확인해 주세요.', condition: '생활 사용감 있음' },
  '5': { description: '집 안에 초록빛을 더해 주는 화분입니다.\n식물 크기와 관리 방법, 화분 포함 여부를 확인해 주세요.', condition: '상태 양호' },
  '6': { description: '집에서 커피를 즐기기 위한 핸드드립 세트입니다.\n구성품과 세척 상태를 확인해 주세요.', condition: '사용감 적음' },
  '7': { description: '간결한 디자인의 아날로그 손목시계입니다.\n작동 상태와 스트랩 길이를 확인해 주세요.', condition: '생활 사용감 있음' },
  '8': { description: '취미 연주와 연습에 활용하기 좋은 어쿠스틱 기타입니다.\n넥과 줄 상태, 케이스 포함 여부를 확인해 주세요.', condition: '상태 양호' },
};

export const sampleReviews = [
  { id: 'demo-1', author: '샘플 사용자 A', rating: 5, date: '2026.09.01', body: '설명이 자세해서 상품 상태를 확인하기 편했어요.' },
  { id: 'demo-2', author: '샘플 사용자 B', rating: 4, date: '2026.09.03', body: '사진과 설명을 비교하며 살펴볼 수 있었어요.' },
];
