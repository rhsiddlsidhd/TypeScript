/**
 * 제네릭 클레스
 */
//일반 클레스
// class NumberList {
//   //생성자
//   constructor(private list: number[]) {}

//   push(data: number) {
//     this.list.push(data);
//   }
//   pop() {
//     return this.list.pop();
//   }
//   print() {
//     console.log(this.list);
//   }
// }

// const numberList = new NumberList([1, 2, 3]);
// numberList.pop();
// numberList.push(4);
// numberList.print();

//제네릭 클레스
class List<T> {
  //생성자
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("hello");
