const splitStr = "/,/,/,";

const numbers = localStorage.getItem("numbers")?.split(splitStr) || [];
const titles = localStorage.getItem("titles")?.split(splitStr) || [];
const users = localStorage.getItem("users")?.split(splitStr) || [];
const texts = localStorage.getItem("texts")?.split(splitStr) || [];
const createdAts = localStorage.getItem("createdAts")?.split(splitStr) || [];
const views = localStorage.getItem("views")?.split(splitStr) || [];
const likes = localStorage.getItem("likes")?.split(splitStr) || [];
// const comments = localStorage.getItem("comments")
//   ? JSON.parse(localStorage.getItem("comments"))
//   : [];

let comments = localStorage.getItem("comments");
if (comments) {
  comments = JSON.parse(localStorage.getItem("comments"));
} else {
  comments = [];
}

document.getElementById("add").onclick = () => {
  if (numbers.length) {
    numbers.push(+numbers[numbers.length - 1] + 1);
  } else {
    numbers.push(1);
  }
  localStorage.setItem("numbers", numbers.join(splitStr));
  //   console.log(localStorage.getItem("numbers").split(splitStr));

  const title = document.getElementById("title").value;
  //   console.log(title);
  titles.push(title);
  localStorage.setItem("titles", titles.join(splitStr));
  //   console.log(localStorage.getItem("titles").split(splitStr));

  const user = document.getElementById("user").value;
  //   console.log(user);
  users.push(user);
  localStorage.setItem("users", users.join(splitStr));
  //   console.log(localStorage.getItem("users").split(splitStr));

  const text = document.getElementById("text").value;
  //   console.log(text);
  texts.push(text);
  localStorage.setItem("texts", texts.join(splitStr));
  //   console.log(localStorage.getItem("texts").split(splitStr));

  createdAts.push(Date.now());
  localStorage.setItem("createdAts", createdAts.join(splitStr));
  views.push(0);
  localStorage.setItem("views", views.join(splitStr));
  likes.push(0);
  localStorage.setItem("likes", likes.join(splitStr));
  comments.push([]);
  localStorage.setItem("comments", JSON.stringify(comments));

  alert("등록되었습니다.");

  window.location.href = "../";
};
