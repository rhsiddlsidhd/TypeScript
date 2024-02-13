/**
 * 프로미스
 *
 * 성공 = > 타입을 지정할 수 있다
 * 실패 = > 타입을 지정할 수 없다. => any => 그래서 타입을 좁혀주어서 에러를 던짐
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("~실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); //20
});
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
}); //~실패

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

/**
 * 1안 2안 둘다 사용가능하나 2안을 추천
 *
 */

//1안
// function fetchPost() {
//   return new Promise<Post>((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, title: "게시글 제목", content: "게시글 컨텐츠" });
//     }, 3000);
//   });
// }

// const postRequest = fetchPost();

// postRequest.then((post) => {
//   post.id;
// });

//2안
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: "게시글 제목", content: "게시글 컨텐츠" });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
