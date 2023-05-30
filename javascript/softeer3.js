// 3. 자동차 데이터 테이블에서 조건을 만족하는 차량 반환
// 기간과 승객수를 입력으로 받음
// 차랑명(차종)으로 반환, 단종제품일 시 차량명*
// 만족하는 데이터 없으면 빈 문자열 반환
// 입력에 대한 공백처리 해줘야 함

// 197703, 3 - 공백있음!
// Cortina*(Sedan),Pony*(Sedan),Porter*(Truck)

// 199901,5
// Aerotown(Bus), Grandeur(Sedan);

function solution(param0, param1) {
  let result = [];
  const carData = [
    {
      name: "Tuscani",
      expired: true,
      type: "Coupe",
      capacity: 2,
      sy: 2001,
      sm: 9,
      ey: 2008,
      em: 10,
    },
    {
      name: "Porter",
      expired: true,
      type: "Truck",
      capacity: 3,
      sy: 1977,
      sm: 2,
      ey: 2004,
      em: 5,
    },
    {
      name: "Cortina",
      expired: true,
      type: "Sedan",
      capacity: 5,
      sy: 1968,
      sm: 1,
      ey: 1980,
      em: 4,
    },
    {
      name: "Elantra",
      expired: true,
      type: "Sedan",
      capacity: 5,
      sy: 1990,
      sm: 10,
      ey: 1995,
      em: 12,
    },
    {
      name: "Equus",
      expired: true,
      type: "Sedan",
      capacity: 5,
      sy: 1999,
      sm: 4,
      ey: 2009,
      em: 12,
    },
    {
      name: "Grandeur",
      expired: false,
      type: "Sedan",
      capacity: 5,
      sy: 1986,
      sm: 7,
      ey: 2023,
      em: 5,
    },
    {
      name: "Pony",
      expired: true,
      type: "Sedan",
      capacity: 5,
      sy: 1975,
      sm: 12,
      ey: 1982,
      em: 1,
    },
    {
      name: "SantaFe",
      expired: false,
      type: "RV",
      capacity: 7,
      sy: 2000,
      sm: 6,
      ey: 2023,
      em: 5,
    },
    {
      name: "Aerotown",
      expired: false,
      type: "Bus",
      capacity: 30,
      sy: 1994,
      sm: 6,
      ey: 2023,
      em: 5,
    },
    {
      name: "Universe",
      expired: false,
      type: "Bus",
      capacity: 45,
      sy: 2006,
      sm: 12,
      ey: 2023,
      em: 5,
    },
  ];

  let inputDate = param0.toString();
  let inputCapacity = +param1.toString();
  inputYear = +inputDate.substr(0, 4);
  inputMonth = +inputDate.substr(4, 6);

  // 객체 순회
  // 만약 입력값 중
  carData.forEach((item, i) => {
    if ((item.sy <= inputYear <= item.ey && item.sm <= inputMonth <= item.em) || inputCapacity <= item.capacity) {
      if (item.expired) {
        result.push(`${item.name}*(${item.type})`);
      } else {
        result.push(`${item.name}(${item.type})`);
      }
    }
  });
  return console.log(...result);
}

solution(197703, 3);
