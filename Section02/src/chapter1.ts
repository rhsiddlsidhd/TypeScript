//number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1.toFixed();

//string
let str1: String = "hello";
let str2: String = "hello";
let str3: String = `hello`;
let str4: String = `hello ${num1}`;

//Boolean
let bool1: Boolean = true;
let bool2: Boolean = false;

//null
let null1: null = null;

//undefined
let unde1: undefined = undefined;

//tsconfig.json strictNullChecks 옵션으로 false 로 임시로 넣을수 있도록 설정 (기본은 true)
let numA: number = null;

//리터럴 타입(값 자체가 타입)

let numB: 10 = 10;
let StrA: "hello" = "hello";
