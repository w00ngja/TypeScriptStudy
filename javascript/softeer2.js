// 2. 자동차 queue

// Run by Node.js
// const readline = require("readline");

// (async () => {
//   let rl = readline.createInterface({ input: process.stdin });

//   for await (const line of rl) {
//     console.log(line);
//     rl.close();
//   }

//   process.exit();
// })();

// 8
// enqueue A
// enqueue B
// enqueue C
// enqueue D
// dequeue
// dequeue
// dequeue
// dequeue
// A B C D

// 저장된 큐 리스트에서 빈도수가 가장 높고, 가장 먼저 enqueue된 문자를 반환하고 제거
// 리스트가 비어있으면 *를 반환
// 빈도수가 같다면 가장 먼저 enqueue된 문자를 반환하고 제거

// dequeue 함수가 반환하는 문자를 공백문자로 구분하여 순서대로 출력
// 맨 앞의 하나만 반환함.
