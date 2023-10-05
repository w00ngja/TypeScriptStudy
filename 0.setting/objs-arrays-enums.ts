// 20231003
// 객체 타입

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilan',
//   age: 30,
//   hobbies: ['Surfing', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Maximilan',
  age: 30,
  hobbies: ['Surfing', 'Cooking'],
  role: Role.ADMIN,
};
// role 튜플의 2번째 인덱스는 문자열이기 때문에, 정수 10을 할당할 수 없다.
// person.role[1] = 10;

// console.log(person.name);
