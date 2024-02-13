/**
 * 맵드 타입
 * 활용도가 높고 실무에서도 많이 사용됨
 *
 * 주의 )인터페이스에서는 쓸 수가 없다
 *      타입 별칭으로만 사용해야한다는 점
 *
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  //.. 기능
  return {
    id: 1,
    name: "이정환",
    age: 16,
  };
}

//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  //.. 수정하는기능
}

updateUser({
  id: 1,
  name: "이정환",
  age: 23,
});
