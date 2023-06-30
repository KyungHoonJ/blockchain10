function sum(isIncrease, isDecrease, num1, num2) {
  if (isIncrease) {
    return num1 + num2;
  } else if (isDecrease) {
    return num1 - num2;
  }
}

console.log(sum(true, false, 4, 10));

let a = 111;
function sum1(num1, num2) {
  let sumValue = num1 + num2;
  console.log(a);
  return sumValue;
}

console.log(sum1(sum1(1, 2), sum1(3, sum1(4, 5))));

function tempFunc() {
  let name1 = "이선균";
  console.log("이건?");
}

tempFunc();
// console.log(name1);

function funcA() {
  // 함수 선언식
  return "a";
}

console.log(funcA);
console.log(funcA());

const funcB = function () {
  // 함수 표현식
  return "b";
};

console.log(funcB());

const funcArrow = (num1, num2) => {
  return num1 + num2;
};

let input;

function inputDate() {
  input = prompt("입력해라");
  console.log(input);
}
