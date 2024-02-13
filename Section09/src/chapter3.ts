/**
 * infer
 * inference => 추론하다
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

// C 가 never 가 되는 이유 ) infre 다음에 오는 type을 추론할 수 없는 경우 거짓으로 판명
type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
// 3.

type PromiseA = PromiseUnpack<Promise<number>>;
//number

type PromiseB = PromiseUnpack<Promise<string>>;
//string
