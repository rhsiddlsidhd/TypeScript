//void
//void ==> 공허 ==> 아무것도 없다
//void ==> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

//그렇다면 undefined || null 가 있는데 왜 쓰지 않고 void 라는걸 만들어 쓰는걸까? (Study)

function func2(): void {
  console.log("hello");
}

// let a: void;
// a = 1;
// a = "hello";
// a = undefined;

//never
//never ==> 존재하지 않는
//불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
