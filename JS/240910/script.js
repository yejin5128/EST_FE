// 원시타입
// 숫자, 문자열

// 불리언 -> 참 또는 거짓을 나타내는 자료형
// 비교연산자의 결과로 자주 사용됨

console.log(`true && true >> $(true && ture)`); // forEach를 이용한 문제
// 실습
const phoneNumbers = [
  "010-1234-5678",
  "02-987-6543",
  "031-456-7890",
  "010-8765-4321",
];
// 배열에서 전화번호 뒷자리만 출력하기

phoneNumbers.forEach((el) => console.log(el.slice(-4)));
