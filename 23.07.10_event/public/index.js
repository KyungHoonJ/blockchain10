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

window.onkeydown = (e) => {
  console.log(e);
};
