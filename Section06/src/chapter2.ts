/**
 * TypeScript Class 객체 지원하는 특정 기능
 * 접근제어자
 * access modifier
 * =>public private protected
 *
 */

class Employee {
  //필드 (기본값 = public)
  private name: string; //employee 클레스 객체에서만 허용
  protected age: number; // + 파생까지 허용
  position: string; //public

  //생성자
  constructor(
    name: string,
    age: number,
    position: string
    //아래와 같이 생정자에 접근제어자 사용시에는 필드를 전부 제거해야함 (Why? 필드에서 이미 생성하면 생성자에서는 자동으로 부여해주고 있기에 필드랑 생성자 동시사용은 중복코드로 오류냄 )
    // private name: string,
    // protected age: number,
    // public position: string
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  work() {
    console.log(`${this.name}이렇게만 허용 private`);
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;
  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  //메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동";
// employee.age = 10;
employee.position = "땅개";

console.log(employee);
