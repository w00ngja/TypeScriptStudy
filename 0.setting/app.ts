interface Person {
  // 다음 선언으로 넘어갈 때 세미콜론(;)을 사용
  name: string;
  age: number;

  // 객체 내 메서드 인터페이스
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Max',
  age: 20,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi!');

interface ClassInterface {
  name: string;
  greet(phrase: string): void;
}

class Person implements ClassInterface {
  name = 'Max';
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase);
  }
}

type AddFn = (a: number, b: number) => number;
let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
