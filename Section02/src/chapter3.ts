//Object
//객체 리터럴타입
// ? 선택적 속성을 사용하기 위해 사용하였음 ( Optional property)
let user: { id?: number; name: string } = {
  id: 1,

  name: "이정환",
};

user = {
  name: "홍길동",
};

//readonly 라는 읽기 전용 property
let config: {
  readonly apiKey: string;
} = { apiKey: "My API Key" };

// config.apiKey = "hacked";
