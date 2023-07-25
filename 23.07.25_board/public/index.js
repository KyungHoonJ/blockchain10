// const temp = {
//   num: 0,
//   title: "제목",
//   user: "정경훈",
//   text: "지금은 안보임",
//   createdAt: Date.now(),
//   views: 0,
//   likes: 0,
//   comments: [],
// };

const temps = [
  {
    num: 0,
    title: "제목",
    user: "정경훈",
    text: "지금은 안보임",
    createdAt: Date.now(),
    views: 0,
    likes: 0,
    comments: [],
  },
  {
    num: 3,
    title: "제목6",
    user: "정경훈4",
    text: "지금은 안보임",
    createdAt: Date.now(),
    views: 0,
    likes: 0,
    comments: [],
  },
  {
    num: 2,
    title: "제목1",
    user: "정경훈2",
    text: "지금은 안보임",
    createdAt: Date.now(),
    views: 0,
    likes: 0,
    comments: [],
  },
];

const splitStr = "/,/,/,";

// localStorage.clear();
// localStorage.setItem("numbers", [1, 2].join(splitStr));
// localStorage.setItem("titles", ["안녕~,확인중", "확인중"].join(splitStr));
// localStorage.setItem("users", ["정경훈", "확인중"].join(splitStr));
// localStorage.setItem("texts", ["내용", "확인중"].join(splitStr));
// localStorage.setItem("createdAts", [Date.now(), Date.now()].join(splitStr));
// localStorage.setItem("views", [0, 0].join(splitStr));
// localStorage.setItem("likes", [0, 0].join(splitStr));
// localStorage.setItem("comments", [[], []].join(splitStr));
// console.log(localStorage.getItem("list"));

// const numbers = localStorage.getItem("numbers");
// const titles = localStorage.getItem("titles");
// const users = localStorage.getItem("users");
// // const texts = localStorage.getItem("texts");
// const createdAts = localStorage.getItem("createdAts");
// const views = localStorage.getItem("views");
// const likes = localStorage.getItem("likes");
// // const comments = localStorage.getItem("comments");

// console.log(localStorage.getItem("numbers"));

const list = {
  numbers: localStorage.getItem("numbers")?.split(splitStr) || [],
  titles: localStorage.getItem("titles")?.split(splitStr) || [],
  users: localStorage.getItem("users")?.split(splitStr) || [],
  createdAts: localStorage.getItem("createdAts")?.split(splitStr) || [],
  views: localStorage.getItem("views")?.split(splitStr) || [],
  likes: localStorage.getItem("likes")?.split(splitStr) || [],
};
console.log(list);

const listElem = document.getElementById("list");

// const thList = ["num", "title", "user", "createdAt", "views", "likes"];
// // for (let j = 0; j < temps.length; ++j) {
// temps.forEach((item) => {
//   const tr = document.createElement("tr");
//   // for (let i = 0; i < thList.length; ++i) {
//   thList.forEach((th) => {
//     const td = document.createElement("td");
//     tr.append(td);
//     td.innerHTML = item[th];
//   });
//   // }
//   listElem.append(tr);
// });
// // }

// console.log(list);

const thList = ["numbers", "titles", "users", "createdAts", "views", "likes"];
for (let i = 0; i < list.numbers.length; ++i) {
  const tr = document.createElement("tr");
  thList.forEach((item) => {
    const td = document.createElement("td");

    if (item == "createdAts")
      td.innerHTML = new Date(+list[item][i]).toLocaleString();
    else if (item == "titles") {
      const aElem = document.createElement("a");
      aElem.innerHTML = list[item][i];
      aElem.href = `./board/?idx=${i}`;
      td.classList.add("title");
      td.append(aElem);
    } else td.innerHTML = list[item][i];
    tr.append(td);
  });
  listElem.append(tr);
}
