// // function pleaseCallback(tempLog) {
// //   tempLog("안녕");
// // }

// // pleaseCallback(console.log);
// // // 고차함수
// // pleaseCallback((temp) => {
// //   console.log(temp);
// // });

// // function higherFunc() {
// //   return console.log;
// // }

// // console.log(higherFunc());

// // higherFunc()("고차함수");
// // console.log(`higherFunc() == console.log : ${higherFunc() == console.log}`);
// // // higherFunc을 호출(higherFunc())하면 그 return 값이 console.log 메서드이다.

// // function sum(a, b) {
// //   return a + b;
// // }

// // const tempValue = sum(2, 60); // 62, number
// // console.log(tempValue);

// // function higherFunc1() {
// //   return sum;
// // }

// // const tempFunc = higherFunc1();
// // console.log(tempFunc == sum);

// // console.log(
// //   [45, 1, 5, 6, 16, 7, 23, 6, 67, 87, 32, 5, 67].sort((a, b) => {
// //     return a - b;
// //   })
// // );

// // (function () {
// //   //원하는 내용을 넣는다.
// // })();

// // const tempFunc1 = () => {
// //   //원하는 내용을 넣는다.
// // };
// // tempFunc1();

// // // 재귀함수
// // function func2(num) {
// //   console.log(num);
// //   if (!num) return 0;
// //   func2(num - 1);
// // }
// // func2(10);

// // function fibonacci(idx) {}
// // // [1, 1, 2, 3, 5, 8, 13, 21, 34]
// // // fibonacci(7) => 21
// // // fibonacci(8) => 34

// // const interval = setInterval(() => {
// //   console.log("반복해서 실행해");
// // }, 1000);

// // const timeout = setTimeout(() => {
// //   console.log("기다렸다가 실행해");
// //   clearInterval(interval);
// // }, 10000);

// // clearTimeout(timeout);

// // for (let i = 0; i < 10; ++i) console.log(i);

// // function funcA() {
// //   setTimeout(() => {
// //     console.log("A");
// //     funcB();
// //   }, 1000);
// // }
// // funcA();
// // function funcB() {
// //   setTimeout(() => {
// //     console.log("B");
// //     funcC();
// //   }, 1000);
// // }

// // function funcC() {
// //   setTimeout(() => {
// //     console.log("C");
// //     funcA();
// //   }, 1000);
// // }

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((item) => {
//   console.log(item);
// });
// // 2,

// for (let i = 0; i < 10; ++i) {
//   setTimeout(() => {
//     console.log(`test1-${i}`);
//   }, 1000 * (i + 1));
// }

// setTimeout(() => {
//   for (let i = 0; i < 10; ++i) {
//     console.log(`test2-${i}`);
//   }
// }, 1000);

// let tempIdx = 0;
// const tempInterval = setInterval(() => {
//   console.log(`test3-${tempIdx++}`);
//   if (tempIdx > 9) clearInterval(tempInterval);
// }, 1000);

function timeoutFunc(num) {
  if (num < 10)
    setTimeout(() => {
      console.log(num);
      timeoutFunc(num + 1);
    }, 1000);
  console.log("확인");
}
// timeoutFunc(0);

let a = 1;
if (a < 1) console.log(a);
else if (a < 2) console.log(a - 1);
else if (a < 3) console.log(a - 2);
else if (a < 4) console.log(a - 3);
else if (a < 5) console.log(a);
console.log(a + 10);

if (a < 1) console.log(a);
else {
  if (a < 2) console.log(a - 1);
  else {
    if (a < 3) console.log(a - 2);
    else {
      if (a < 4) console.log(a - 3);
      else {
        if (a < 5) console.log(a);
      }
    }
  }
}
