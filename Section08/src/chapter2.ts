/**
 * key of 연산자
 * 해당 타입의 모든 프로퍼티의 키를 union 타입으로 추출
 */

// interface Person {
//   name: string;
//   age: number;
// }

// function getPropertyKey(person: Person, key: keyof Person) {
//   return person[key];
// }

// const person: Person = {
//   name: "이정환",
//   age: 19,
// };

// getPropertyKey(person, "name");

/**
 * 다른 사용 방식 (위와 동일한 결과값임)
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "이정환",
  age: 19,
};

getPropertyKey(person, "name");
