document.getElementById("btn").onclick = function (e) {
  console.log("클릭 했어");
  console.log(e);
};

window.onload = function () {
  console.log("페이지 로딩 완료");
};

document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e.target);
});

document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});

document.getElementById("btn").addEventListener("mouseover", () => {
  console.log("버튼 위 마우스");
});

const tempClick = (e) => {
  const tempElem = document.createElement("div");
  tempElem.onload = function () {
    console.log("테스트 추가 완료");
  };
  tempElem.innerHTML = "testing";
  e.target.append(tempElem);
};
// tempClick();
document.getElementById("btn").onclick = tempClick;

// document.getElementById("btn").onclick = (e) => {};

// [].forEach((value, index, array)=>{})

// let temp=[];
// temp = temp.map

document.getElementById("count").addEventListener("click", (e) => {
  console.log(e);
  if (e.ctrlKey) {
    e.target.innerHTML = +e.target.innerHTML - 1;
  } else {
    e.target.innerHTML = +e.target.innerHTML + 1;
  }
});

// window.addEventListener("pointerdown", (e) => {
//   console.log(e.pageX);
//   console.log(e.pageY);
// });
// window.addEventListener("pointerup", (e) => {
//   console.log(e.pageX);
//   console.log(e.pageY);
// });

window.addEventListener("touchstart", (e) => {
  console.log(e);
  console.log(e.pageX);
  console.log(e.pageY);
});
window.addEventListener("touchend", (e) => {
  console.log(e.pageX);
  console.log(e.pageY);
});

window.onresize = function (e) {
  document.getElementById("width").innerHTML = e.target.innerWidth + "px";
  document.getElementById("height").innerHTML = e.target.innerHeight + "px";
  if (+e.target.innerWidth / +e.target.innerHeight > 1) {
  }
};

console.log("b" + "a" + +"a" + "a");

// window.onkeydown = (e) => {
//   console.log(e);
// };

// document.getElementById("test-form").onsubmit = (e) => {
//   e.preventDefault();
//   // alert("데이터 보냈어");
//   console.log("데이터 안보냇어");
// };

console.log(document.forms["test-form"]);
// console.log(document.forms.test-form); << 안됨

document.forms["test-form"].onsubmit = (e) => {
  e.preventDefault();
  console.log("데이터 입력 완료");
};

document.forms["test-form"].getElementsByTagName("button")[0].onsubmit = (
  e
) => {
  e.preventDefault();
  console.log("버튼 서브밋?");
};

document.body.onload = () => {
  document.getElementById("test-img").onload = (e) => {
    console.log(e.target);
    console.log("이미지 온로드 확인");
  };
  document
    .getElementById("test-img")
    .setAttribute("src", "public/B002418205-1.jpg");
};

document.getElementById("name").onfocus = function (e) {
  console.log("포커싱");
};

document.getElementById("name").onblur = function (e) {
  console.log("밖으로 나갔어");
};

document.getElementById("name").onchange = function (e) {
  console.log(e.target.value);
  document.getElementById("name-alert").innerHTML = e.target.value;
};

document.forms["test-form"]["name"].oninput = function (e) {
  console.log(e.target.value);
};

let a = 1;
// 템플릿 리터널 => string, HTML에서의 pre 같은 형식
console.log(`
1 옆에 있는 백틱이다.
${a * 10} << 여기에 변수를 입력 가능
${[1, 2, 3, 4]} << 여기에 변수를 입력 가능
${{ a: 1, b: 2 }} << 여기에 변수를 입력 가능
`);
console.log(
  "1 옆에 있는 백틱이다.\n" + a * 10 + "<< 여기에 변수를 입력 가능\n"
);

const tempStudent = {
  name: "김지훈",
  age: 26,
};

document.getElementById(
  "template-literal"
).innerHTML = `이름은 "${tempStudent.name}"이고 나이는 ${tempStudent.age}입니다.`;

// eval("console.log('테스트')")

// mouseover, mouseenter, mouseout, mouseleave
