// enum 타입(= 열거형타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 따로 선언 하지 않으면 index 번호가 자동으로 0 부터 부여
// 선언 시에는 그 다음 요소들은 Role +1 자동 부여
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 10] = "User";
    Role[Role["Guest"] = 11] = "Guest";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    role: Role.Admin, //0 <- 관리자
    language: Language.Korean,
};
const user2 = {
    name: "홍길동",
    role: Role.User, // 1 <- 일반유저
};
const user3 = {
    name: "이무개",
    role: Role.Guest, // 2 <- 게스트
};
console.log(user1, user2, user3);
export {};
