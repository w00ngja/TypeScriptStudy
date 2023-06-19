function solution(arr) {
  let answer = [];
  let continuity = 0;

  // 배열의 모든 원소 한 번씩 순회
  // 특정 원소의 다음 원소가 같은 값이라면 cnt +1
  // 다른 값이라면 cnt +1을 answer 배열에 Push

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continuity += 1;
    } else {
      if (arr[i] === arr[i - 1]) {
        answer.push(continuity + 1);
        continuity = 0;
      }
    }
  }

  return answer;
}

console.log(solution([3, 2, 4, 4, 2, 5, 2, 5, 5]));
