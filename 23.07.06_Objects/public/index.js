function Student(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = [];
  if (typeof hobby == "object") {
    this.hobby = hobby;
  } else {
    this.hobby.push(hobby);
  }
}
const students = [
  new Student("강수빈", 26, ["애니 감상", "달리기", "팔굽혀펴기"]),
  new Student("임태훈", 28, "영화감상"),
  new Student("양원철", 28, "골프"),
  new Student("이선균", 30, "맛집 탐방"),
  new Student("김호현", 26, ["국내 여행", "세계 투어", "자전거 타기"]),
  new Student("황현준", 28, "드라이브"),
  new Student("김보람", 30, "일기 쓰기"),
  new Student("이은재", 24, "독서"),
  new Student("정승교", 24, "자전거 타기"),
  new Student("박상현", 30, "농구"),
  new Student("전상민", 32, ["분석", null]),
  new Student("김지훈", 26, "유튜브 보기"),
];

console.log(students[11]);
console.log(new Student("김지훈", 26, "유튜브 보기"));
console.log(students.indexOf(new Student("김지훈", 26, "유튜브 보기")));
console.log(
  students.find((item) => {
    // return item.name == "정승교";
    return item.hobby.indexOf("자전거 타기") > -1;
  })
);

console.log(
  students.filter((item) => {
    // return item.age > 25;
    return item.hobby.indexOf("자전거 타기") > -1 && item.age > 25;
  })
);

console.log({} == {});

const a = {};
const b = {};

students.forEach((item) => {
  console.log(item);
});

function forEach(tempFunc) {
  for (let i = 0; i < students.length; ++i) {
    tempFunc(students[i]);
  }
}
forEach((item) => {
  console.log(item);
});
