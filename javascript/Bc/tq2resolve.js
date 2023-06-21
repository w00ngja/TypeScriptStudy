function solution(param0) {
  const memory = []; // 메모리를 저장할 배열
  let currentByte = 0; // 현재까지 할당된 바이트 수

  for (let i = 0; i < param0.length; i++) {
    const type = param0[i]; // 현재 타입
    let size = 0; // 타입의 크기를 저장할 변수

    // 타입별 크기 결정
    if (type === "BOOL") {
      size = 1;
    } else if (type === "SHORT") {
      size = 2;
    } else if (type === "FLOAT") {
      size = 4;
    } else if (type === "INT") {
      size = 8;
    } else if (type === "LONG") {
      size = 16;
    }

    if (currentByte + size <= 128) {
      if (size < 8) {
        const padding = 8 - size; // 패딩의 크기 계산
        memory.push("#".repeat(size) + ".".repeat(padding)); // 타입과 패딩을 추가
      } else {
        memory.push("#".repeat(size)); // 8바이트 이상인 타입은 패딩 없이 추가
      }

      currentByte += size; // 할당된 바이트 수 업데이트
    } else {
      return "HALT"; // 메모리 할당이 128바이트를 초과하는 경우 "HALT"를 반환
    }
  }

  return memory.join(""); // 할당된 메모리를 문자열로 변환하여 반환
}

const testCase1 = ["INT", "INT", "BOOL", "SHORT", "LONG"];
const testCase2 = ["INT", "SHORT", "FLOAT", "INT", "BOOL"];
const testCase3 = ["BOOL", "LONG", "SHORT", "LONG", "BOOL", "BOOL", "LONG", "SHORT", "LONG", "LONG"];

// console.log(solution([1, 2, 3, 3, 3, 4, 4, 4]));

console.log(solution(testCase1));
