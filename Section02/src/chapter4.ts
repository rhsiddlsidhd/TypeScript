//타입별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterLood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

//아래와 같이 쓸 필요없음
let user2: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "똥강아지",
  nickname: "winterLood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

//인덱스 시그니처
type CountryCondes = {
  [Key: string]: string;
};
let countryCodes: CountryCondes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCondes: CountryNumberCodes = {
  Korea: 123,
  // Korea:"ko"
};
