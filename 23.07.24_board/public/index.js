const temp = {
  num: 0,
  title: "제목",
  user: "정경훈",
  text: "지금은 안보임",
  createdAt: Date.now(),
  views: 0,
  likes: 0,
  comments: [],
};

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

const listElem = document.getElementById("list");

const thList = ["num", "title", "user", "createdAt", "views", "likes"];

for (let j = 0; j < temps.length; ++j) {
  const tr = document.createElement("tr");
  for (let i = 0; i < thList.length; ++i) {
    const td = document.createElement("td");
    tr.append(td);
    td.innerHTML = temps[j][thList[i]];
  }
  listElem.append(tr);
}
