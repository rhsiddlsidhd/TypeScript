/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi: () => void; //=== sayHi():void
}

type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: "이정환",
  sayHi: function () {
    console.log("hi");
  },
};
