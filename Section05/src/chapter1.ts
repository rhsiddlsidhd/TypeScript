/**
 * 인터페이스의 확장(=상속)
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBack: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}
