// * 업 캐스팅 Ok <> 다운캐스팅 No *
// * UnKnown 타입

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 2;

  let unknownVar: unknown;

  // let num: number = nuknownVar;
}

// * never 타입 (= 공집합)

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();

  // let never1: never = 10;
  // let never2: never = "string"
}

//  * void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
}

// any 타입 (유일 다운캐스팅 Ok = 타입계층도를 무시하는 유일한 타입 = 왠만하면 사용하지 X = 예외)never만 불가능)

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  // neverVar = anyVar;
}
