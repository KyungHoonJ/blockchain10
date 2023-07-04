console.log(document.getElementById("list").firstElementChild);

const listChildren = document.getElementById("list").children;

for (let i = 0; i < listChildren.length; ++i) {
  // listChildren[i].style = "border: 1px solid black";
  // listChildren[i].style.padding = "1rem " + i * 1 + "rem";
  //   listChildren[i].className += " item-border";
  //   listChildren[i].classList.add("item-border");
  //   console.log(listChildren[i].classList.contains("item-border"));
  //   // 함수 사용? 함수명(필요한 매개변수)
  //   // resavrbasvreas.bsearvesarv()
  //   listChildren[i].classList.remove("item-border");
  //   console.log(listChildren[i].classList.contains("item-border"));
  listChildren[i].onclick = function () {
    // if (listChildren[i].classList.contains("item-border")) {
    //   listChildren[i].classList.remove("item-border");
    // } else {
    //   listChildren[i].classList.add("item-border");
    // }
    listChildren[i].classList.toggle("item-border");
  };
}

console.log(listChildren[0].parentElement);
console.log(listChildren[1].parentElement);

console.log(document.getElementsByClassName("item-1"));

console.log(document.getElementById("list").getElementsByClassName("item-2"));

console.log(document.querySelectorAll("#list"));

console.log([]);

const studentList = document.getElementById("students");

function addStudentFunc(value) {
  const tempElem = document.createElement("li");
  tempElem.innerHTML = value;
  tempElem.onclick = function () {
    // addStudentFunc(value);
    tempElem.outerHTML = "";
  };
  studentList.append(tempElem);
}

const students = ["강수빈", "임태훈", "양원철"];
// studentList[0] = "양원철";
for (let i = 0; i < students.length; i++) {
  addStudentFunc(students[i]);
  //   // studentList.innerHTML += "<li>" + students[i] + "</li>";
  //   const tempElem = document.createElement("li");
  //   //   tempElem.classList.add("item-border");
  //   //   tempElem.id = "testing" + i;
  //   tempElem.innerHTML = students[i];
  //   studentList.append(tempElem);
  //   //   document.getElementById("students").prepend(tempElem);
}

const bottun = document.getElementById("add-student");
const addStudent = document.getElementById("name");
// const addStudent = document.getElementsByTagName("input");
// console.log(addStudent[0]);
bottun.onclick = function () {
  // console.log(addStudent.value);
  // addStudent.value = "";
  // studentList.add('ul')
  //   const tempElem = document.createElement("li");
  //   tempElem.innerHTML = addStudent.value;
  //   tempElem.onclick = function () {
  //     const tempElem2 = document.createElement("li");
  //     tempElem2.innerHTML = tempElem.innerHTML;
  //     studentList.append(tempElem2);
  //     // tempElem.outerHTML = "";
  //   };
  //   studentList.append(tempElem);
  addStudentFunc(addStudent.value);
};

function funcA() {
  console.log("실행했어");
}
// funcA();
