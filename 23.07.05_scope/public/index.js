// Scope
{
  let a = 0;
  // 지역 변수, 지역 스코프
}
// 코드를 묶어준다.
let a = 1;
console.log(a);
// let a = 0;
// 전역 변수, 전역 스코프
{
  let a = 3;
  console.log(a);
}

console.log(a);

function funcScope() {
  // 함수 스코프
  const students = ["강수빈"];
  return students;
}
console.log(funcScope());
// console.log(students);

// let i = 8;
// for (let i = 0; i < 10; ++i) {
//   console.log(i);
// }

// let i = 0;
// while (true) {
//   if (!(i < 10)) break;
//   console.log(i);
//   ++i;
// }
// i = 0;
// for (; i < 10; ) {
//   console.log(i);
//   ++i;
// }
// i = 0;
// for (;;) {
//   if (!(i < 10)) break;
//   console.log(i);
//   ++i;
// }

function sum(num1, num2) {}

function sub(num1, num2) {}

function calculate(num1, num2, operator) {
  //   if (operator == "+") {
  //     return num1 + num2;
  //   } else if (operator == "-") {
  //     return num1 - num2;
  //   } else if (operator == "*") {
  //     return num1 * num2;
  //   } else if (operator == "/") {
  //     return num1 / num2;
  //   } else if (operator == "%") {
  //     return num1 % num2;
  //   }
  //   return "?";
  return operator == "+"
    ? num1 + num2
    : operator == "-"
    ? num1 - num2
    : operator == "*"
    ? num1 * num2
    : operator == "/"
    ? num1 / num2
    : operator == "%"
    ? num1 % num2
    : "";
  // 삼항 연산자 => 조건 ? 참일때 : 거짓일때
  // 학생 입장 : 삼항 연산자라고 적고 사망 연산자라고 읽었다
}

console.log(calculate(1, 2, "+"));
// console.log(num1);

const obj = {
  a: 1,
  b: "a",
  c: true,
  d: undefined,
  e: null,
  f: function () {
    console.log("f");
  },
  g() {
    console.log("g");
  },
  h: () => {
    console.log("h");
  },
};

console.log(Object.keys(obj));
console.log(Object.values(obj));

let objA = 1;
let objB = "a";
let objC = true;
let objD = undefined;
let objE = null;
let objF = function () {
  console.log("f");
};
function objG() {
  console.log("g");
}
let objH = () => {
  console.log("h");
};

function funcA() {
  console.log("a");
}
funcA();

(function () {
  console.log("anonymous");
  let a = 0;
})();
// 즉시실행함수

const students = ["강수빈", "임태훈"];
console.log(students[0]);
students.push("양원철");
console.log(students);
console.log(students.pop(""));
console.log(students);
students.push("양원철");
students.push("이선균");
students.push("김호현");
students.push("황현준");
students.push("김보람");
students.push("이은재");
students.push("정승교");
students.push("박상현");
students.push("전상민");
students.push("김지훈");
console.log(students);
console.log(students.indexOf("정경훈"));
console.log(
  students.find((item) => {
    return item == "이선균";
  })
);
console.log(
  students.findIndex((item) => {
    return item == "이선균";
  })
);
// 1.
students.forEach((v) => {
  console.log(v);
});
// 2.
students.forEach(function (item) {
  console.log(item);
  return item;
});
// 3.
function forForEach(item) {
  console.log(item);
}
students.forEach(forForEach);

console.log(
  students.map((v) => {
    console.log(v);
    return v + " 학생";
  })
);
// students.map((v) => {
//   console.log(v);
//   // return v + " 학생";
// });

console.log(students.join(" / "));
console.log(students.toString());
// [0'강수빈 학생',1 '임태훈 학생',2 '양원철 학생',3 '이선균 학생',4 '김호현 학생',5 '황현준 학생', '김보람 학생', '이은재 학생', '정승교 학생', '박상현 학생', '전상민 학생', '김지훈 학생']
console.log(students.slice(1, 4));
console.log(students.slice(1, -1));
console.log(students.sort());
console.log(
  students.sort((a, b) => {
    return b < a;
  })
);
console.log(students.reverse());
students.push("asdf");
console.log(students);
students.pop();
console.log(students);

students.unshift("강수빈");
console.log(students);
students.shift();
console.log(students);

console.log(
  [8, 13, 5, 3, 9, 0, 1, 2500, 100, 101, 7, 13].sort((a, b) => {
    return a - b;
  })
);
