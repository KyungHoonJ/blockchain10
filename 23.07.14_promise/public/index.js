// setTimeout(() => {
//   console.log("a");
//   setTimeout(() => {
//     console.log("b");
//     setTimeout(() => {
//       console.log("c");
//       setTimeout(() => {
//         console.log("d");
//         setTimeout(() => {
//           console.log("e");
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);
// 위와 같은 코드를 콜백 지옥이라고 한다.
// 콜백 지옥을 편히 보기 위해서 Promise 클래스를 사용한다.

function notCallbackHell(msg, time) {
  return new Promise((resolve, reject) => {
    // resolve(msg);
    // if (msg == "b") reject("b is error");
    try {
      // reject("is error");
      // 저희가 할 일
      setTimeout(() => {
        //   console.log(msg);
        resolve(msg);
      }, time);
    } catch (err) {
      reject(err);
    } finally {
      console.log("통신완료");
    }
  });
}

// notCallbackHell("a", 1000)
//   .then((data) => {
//     console.log(data);
//     return notCallbackHell("b", 2000);
//   })
//   .then((data) => {
//     console.log(data);
//     return notCallbackHell("c", 3000);
//   })
//   .then((data) => {
//     console.log(data);
//     // return notCallbackHell("c", 3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("끝났어");
//   });

// console.log("체크중");

async function waitFunc() {
  try {
    let temp = await notCallbackHell("a", 1000);
    console.log(temp);
    temp = await notCallbackHell("b", 2000);
    console.log(temp);
    temp = await notCallbackHell("c", 3000);
    console.log(temp);
  } catch (err) {
    console.log(err);
  }
}
waitFunc().then(() => {
  console.log("끝났어");
});

// HTTP 통신 || HTTPS
// 통신 방법 또는 과정, 규약

// RESTFUL API
// 방식, 사용방법
// GET, POST, PUT, PATCH, DELETE, OPTIONS
// GET << 단순 데이터 요청
// POST << 데이터를 숨겨서 요청
// PUT || PATCH << 데이터 수정 요청
// DELETE << 데이터 삭제 요청

// SOCKET, TCP, IP

// Cookie, Session
// 브라우저에서 저장하는 데이터 << 쿠키
// 서버에서 저장하는 데이터 << 세션
// 둘.다. 스트링
// 쿠키 >> 브라우저에서 저장, 로그인 저장
// 세션 >> 로그인 저장
// 캐시 >> 임시 데이터

document.cookie = "asd=sdaf; gbnfxrd=53235;";
console.log(document.cookie);

// 스토리지
localStorage.setItem("name", ["김호현", "이선균"]);
console.log(localStorage.getItem("name"));
localStorage.clear();
