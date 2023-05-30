// 1. 다트
// 입력받은 배열에서, 라운드별로 6개씩 나눌 수 있음
// 초기점수 40점, 못맞추면 현재점수에서 2나누고 반올림

function solution(...param) {
  const input = [...param];
  const round = [];
  let point = 40;

  // 6개씩 쪼개 -> input[0] : 0라운드 좌표
  for (let i = 0; i < input.length; i += 6) {
    round.push([
      [input[i + 0], input[i + 1]],
      [input[i + 2], input[i + 3]],
      [input[i + 4], input[i + 5]],
    ]);
  }

  round.forEach((roundNum, i) => {
    if (i === 0) {
      roundNum.forEach((item) => {
        if (11 <= item[0] <= 13 && 2 <= item[1] <= 4) {
          if (item[0] != 13 && item[1] != 2) point += 5;
          else {
            point /= 2;
          }
        } else {
          point /= 2;
        }
      });
    }
  });

  return console.log(point);
}

// solution(1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 2);
// solution(11, 2, 12, 2, 13, 3);
solution(1, 1, 2, 2, 3, 3);
