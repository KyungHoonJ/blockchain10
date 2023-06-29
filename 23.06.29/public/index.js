console.log(1 + 2); // 3
console.log(0 - 2); // -2
console.log(3 + "123"); // 3123
console.log(10 + true); // 11
console.log("" + false); // 0? -1? 1?
console.log(2 ** 3); // 8

console.log(3 << 2); // 12
// 3 => 11 2진수 << 왼쪽으로 이동해라, 2번 1100 => 12 10진수
// 2진수를 기준으로 연산하는 비트연산자

console.log(1 < 3);
console.log(1 > 3);
console.log(4 >= 2);
console.log(4 <= 2);
console.log(1 == 2);

console.log("1" == true);
console.log(0 == false);
console.log(1 === true);

console.log(1 != "1");
console.log(1 !== "1");

console.log(!-1);

console.log(true && false);
console.log(true && !false);

console.log(false || true);
// |는 Enter 키 위에 있는 \를 Shift 누르고 누르면 됨

console.log(true || "안녕하세요");

Boolean("asdf");
console.log(!!" ");
console.log(!!-1);
console.log(!!{});
console.log(!![]);
console.log(!!null);
console.log(!!undefined);
console.log(!!"0");

let a = 2;
a += 2; // == a = a + 2;
console.log(a); // 4
a -= 2; // == a = a - 2;
console.log(a); // 2

console.log(a + 2); // 4
console.log(a); // 2

a *= 3; // == a = a * 3;
console.log(a); // 6
a /= 3; // == a = a / 3;
console.log(a); // 2
a **= 3; // == a = a ** 3;
console.log(a); // 8

b = 2;
console.log(window.b);

c = 0;
console.log(a);
console.log(b);
console.log(c);

a = b = c = 5;
console.log(a);
console.log(b);
console.log(c);

console.log("----------------");

console.log(0x100); // x = hex
console.log(0o10); // o = oct
console.log(0b10); // b = bin, binery
console.log("\u00a0"); // unicode

console.log(++a); // 6
console.log(a); // 6
console.log(a++); // 6
console.log(a); // 7

console.log(--a);
// a -= 1;
// console.log(a);

console.log(a--);
// console.log(a)
// a -= 1;

console.log(Symbol("a") == Symbol("a")); // false

const aa = Symbol("a");
const bb = Symbol("a");
console.log(aa == bb);

const cc = bb;
console.log(bb == cc);
console.log({} == {});

console.log("---------------");

if ("정경훈".length == "교수님".length) {
  console.log("이건 참이야");
}

if (a < 0) {
  console.log("a는 0보다 작아");
} else {
  console.log("a는 0보다 작지 않아");
}

if (a > 0) {
  console.log("a는 0보다 커");
} else {
  console.log("a는 0보다 크지 않아");
}

a = 15;
if (a < 0) {
  a *= -1;
} else if (a < 10) {
  a += 10;
} else if (a < 100) {
  a /= 10;
} else {
}
console.log(a);

a = 1;
switch (a) {
  case 1:
    console.log("a는 1이야");
  // break;
  case 2:
    console.log("a는 2이야");
    break;
  default:
    console.log("a는 1도 2도 아니야.");
}
console.log("스위치 밖이야");
if (a == 1) {
  console.log("a는 1이야");
} else if (a == 2) {
  console.log("a는 2이야");
} else {
  console.log("a는 1도 2도 아니야.");
}

console.log("-----------------");

while (a < 100) {
  console.log(++a);
}
a = 1;
while (a < 100) {
  a += 1;
  console.log(a);
}

console.log("-----------------");

a = 1;
while (a < 100) {
  console.log(a++);
}

a = 1;
while (a < 100) {
  console.log(a);
  a += 1;
}

console.log("-------------------");

// console.log("2 * 2 = 4");
// console.log("2 * 3 = 6");
// console.log("2 * 4 = 8");
// // ...
// console.log("2 * 9 = 18");
// console.log("3 * 2 = 6");
let num1 = 2;
let num2 = 2;
while (true) {
  while (true) {
    console.log(num1 + " * " + num2 + " = " + num1 * num2);
    num2 += 1;
    if (num2 < 10) {
    } else break;
  }
  num1 += 1;
  num2 = 2;
  if (num1 < 10) {
  } else break;
}
// console.log(2 + " * " + 2 + " = " + 4);

num1 = 2;
num2 = 2;
while (num1 < 10) {
  num2 = 2;
  while (num2 < 10) {
    console.log(num1 + " * " + num2 + " = " + num1 * num2++);
  }
  num1 += 1;
}
