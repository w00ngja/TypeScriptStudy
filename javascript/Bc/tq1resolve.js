function solution(arr) {
  let answer = [];
  const map = new Map();
  // 배열을 앞에서부터 순회하며 Map 구조에 집어넣음
  // 집어넣는 과정에서, 그 원소가 Map의 키로 존재하는 경우 값을 get(key)+1로 지정해주면 되는데,
  // 존재하지 않을 경우 가장 처음 들어가는 것이기 때문에 값을 1로 지정
  // 만약 모든 키들의 값이 1인 경우 answer = -1
  // 2이상의 값을 갖는 키가 있을경우 들어간 순서대로 값을 answer에 Push하여 반환

  arr.forEach((element) => {
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element) + 1);
    }
  });

  map.forEach((values, key) => {
    if (values !== 1) {
      answer.push(values);
    }
  });

  if (answer.length === 0) answer.push(-1);

  return answer;
}

console.log(solution([1, 2, 3, 3, 3, 4, 4, 4]));
