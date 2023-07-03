let a = "임시로 확인용입니다.";
console.log(a);

// object, 객체
let obj = {
  a: "이것은 값입니다.",
  property: "value",
  key: "value",
  obj2: {
    a: true,
  },
  b: "sadfsd",
};
console.log(obj);
console.log(obj.a);
obj.b = "추가된 키와 값입니다.";
console.log(obj);
console.log(console);

console.log(obj.obj2.a);

console.log(window);
console.log(navigator);

let letNumber = 1;
number = 2;
console.log(window);
console.log(Math.random());
String(18348);
("안녕하세요");
console.log(Number("sadfaesrs"));
console.log("fsdafasf".length);

// 자료형, type
console.log(typeof 1234);
console.log(typeof "asersar");
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof obj);
console.log(typeof obj.key);
console.log(typeof obj.obj2.a);

console.log(new Date());
console.log(Date.now());

let array = [
  111212341,
  "aasea",
  12341,
  true,
  false,
  undefined,
  null,
  { a: "sdf", b: [] },
];
console.log(array);

let arrayObj = {
  0: "sadfsdaf",
  1: 3527985432,
  2: true,
};
console.log(typeof array);

console.log(array[1]);
// console.log(array.1);
let tempA = "a";
console.log(obj[tempA]);
console.log(obj["임시로 확인용입니다."]);
console.log(a);
console.log(arrayObj["1"]);
// obj.a 는 obj["a"]와 obj[tempA]와 같다
//   단 tempA = "a"

const students = [
  {
    name: "강수빈",
    age: 26,
    job: "학생",
    hobby: ["애니감상", "달리기", "팔굽혀펴기"],
  },
  {
    name: "임태훈",
    age: 29,
    job: "학생",
    specialty: [],
  },
];
console.log(students[0].hobby);
console.log(students[1].hobby);
console.log(students[0].specialty);
console.log(students[1].specialty);
console.log(students[0].gender);
console.log(students[1].gender);

const board = [
  {
    title: "제목입니다.",
    text: "내용입니다.",
    createAt: 123521856128,
  },
];

const guide = [
  {
    title: "개별 강점 강화",
    contents: ["본인의 강점을 살린 포트폴리오", "업계 트랜드 및 자료 제공"],
  },
  {
    title: "면접 및 자소서",
    contents: [
      "빅데이터를 통한 면접 컨설팅",
      "AAA회사 우수 사례를 통한 자소서 컨설팅",
    ],
  },
  {
    title: "모의면접",
    contents: [
      "인성 면접 가이드",
      "기술면접 가이드",
      "구직 전략 및 연봉협상 가이드",
    ],
  },
  {
    title: "개발자 취업",
  },
];
