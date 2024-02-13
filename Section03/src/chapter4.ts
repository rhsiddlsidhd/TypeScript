// 대수타입
// => 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// => 합집합 타입과 교집합 타입이 존재

// 1. 합집합 -- Union 타입

let a: string | number | boolean;
a = 1;

a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hi", false];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

// union4 는 어디에도 포함되지 않는다

// 2. 교집합 타입 - InterSection 타입

let variable: number & string;
type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
  // language 빠지면 오류남
};
