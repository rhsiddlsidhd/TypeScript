// 기본타입간의 호환성

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// num2 = num1 => X

// 객체 타입간의 호환성
// => 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가 ?

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal; => 다운캐스팅 => 추가 ProPerty 유무의 차이

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입크기로잘라먹는리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;

// programmingBook = book => 다운캐스팅

// 초과 프로퍼티 검사

let book2: Book = {
  name: "한입크기로잘라먹는리액트",
  price: 33000,
  // skill: "reactjs",
};

let book3: Book = programmingBook;

function func(book: Book) {
  func({
    name: "한입크기로잘라먹는리액트",
    price: 33000,
    //  skill: "reactjs"
  });
}

func(programmingBook);
