/**
 * 분산적인 조건부 타입
 */
// 일반적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

//조건부 타입에 변수로 Union 타입으로 할당해버리면 그때부터는 일반적인 조건부 타입이 아닌 분산적인 조건부타입으로 Upgrade
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

//1단계
//Exclude <number,string>
//Exclude <string,string>
//Exclude <boolean,string>

//2단계
//number |
//never |
//boolean

//결과 ) never 는 공집합 = 제외
//number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
//1단계
//Extract<number,string>
//Extract<string,string>
//Extract<boolean,string>

//2단계
//never
//string
//never

//결과
//string
