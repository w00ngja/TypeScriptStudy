function solution(arr) {
  let answer = "";
  let totalMemory = 0;
  let currentMemory = 0;
  let nextMemory = 0;
  let currentValue = "";

  // 8byte별로 끊어서 (,) 내보내야 함.
  // 누적 메모리는 계속 관리해야 하고, 128byte 초과 시 HART 반환.

  arr.forEach((element, i) => {
    if (totalMemory > 128) return (anwer += "HART");
    if (element === "INT") {
      answer += "########,";
      totalMemory += 8;
    } else if (element === "LONG") {
      answer += "########,########,";
      totalMemory += 16;
    } else {
      if (element === "BOOL") {
        currentMemory += 1;
        currentValue += "#";
      } else if (element === "SHORT") {
        currentMemory += 2;
        currentValue += "##";
      } else if (element === "FLOAT") {
        currentMemory += 4;
        currentValue += "####";
      }

      if (arr[i + 1] === "BOOL") {
        nextMemory = 1;
      } else if (arr[i + 1] === "SHORT") {
        nextMemory = 2;
      } else if (arr[i + 1] === "FLOAT") {
        nextMemory = 4;
      } else {
        padding(currentValue);
        currentMemory = 0;
        nextMemory = 0;
        currentValue = 0;
      }
    }
  });

  // INT면 ######## 그냥 반환하면 되고,
  // LONG이면 ########,######## 반환하면 됨
  // 그럼 다음 원소의 용량을 계산해야겠네,
  // 1. 현재 원소의 용량과 다음 원소의 용량을 체크해
  // 2. 합이 8 이하라면 더하고 (currentMemory, currentValue는 저장), 다음 원소로 넘어가
  // 3. 넘어가서 또 다음 원소를 비교해, 8이하라면 4가 될 때 까지 2->3 반복
  // 4. 합이 8보다 크다면 한 메모리에 존재할 수 없기 때문에, 현재 메모리에 패딩을 채워 answer에 추가하고, current값을 초기화해

  return answer;
}

function padding(currentValue) {
  const loopLength = 8 - currentValue.length;
  for (let i = 0; i < loopLength; i++) {
    currentValue += ".";
  }
  return currentValue;
}

const testCase1 = ["INT", "INT", "BOOL", "SHORT", "LONG"];
const testCase2 = ["INT", "SHORT", "FLOAT", "INT", "BOOL"];
const testCase3 = ["BOOL", "LONG", "SHORT", "LONG", "BOOL", "BOOL", "LONG", "SHORT", "LONG", "LONG"];

// console.log(solution([1, 2, 3, 3, 3, 4, 4, 4]));

console.log(padding("###"));
