const str = "abcDeFgHIJklMn";

console.log(str.indexOf("cD"));
console.log(str.length);
console.log(str.slice(2, 4));
console.log(str.split("F"));
console.log(str.split(""));
console.log(str.replace("Fg", " "));
console.log(str.replaceAll("Fg", " "));
const char = "'a'";

console.log(str.toLowerCase());
console.log(str.toUpperCase());

const introduce = "i am jkh"; // "I am JKH"
const temp = introduce.split(" ");
console.log(
  temp[0].toUpperCase() + " " + temp[1] + " " + temp[2].toUpperCase()
);

console.log(
  introduce
    .split(" ")
    .map(function (item, index) {
      //   if (index % 2 == 0) return item.toUpperCase();
      //   return item;
      return index % 2 ? item.toLowerCase() : item.toUpperCase();
    })
    .join(" ")
); // "i Am JKH" => I am JKH

console.log(!!" ");

console.log(new Date()); // UTC

setTimeout(() => {
  console.log(new Date());
}, 10000);

console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getHours());
console.log(new Date().getTimezoneOffset());
console.log(new Date().toISOString());
console.log(Date.now());
console.log(new Date(1688693979964));

const languages = {
  ko: "안녕",
  en: "Hi",
  jp: "gonichiwa",
  ch: "nihao",
};
let selectedLanguage = "jp";
console.log(languages.ko);
console.log(languages["ko"]);
console.log(languages[selectedLanguage]);

("2023-7-7 10:51");
("2023-07-07 10:51");
("23-07-07 10:51");
("y23 m07 d07 h10 m51");

const temp1 = "my name is jkh".split(" ");
const temp2 =
  temp1[0][0].toUpperCase() +
  temp1[0].slice(1) +
  " " +
  temp1[1] +
  " " +
  temp1[2] +
  " " +
  temp1[3].toUpperCase();
console.log(temp2);

console.log(Math.random());
console.log(Math.abs(-9));
console.log(Math.max(1, 120, -7, 0.6, 0));
console.log(Math.min(1, 120, -7, 0.6, 0));
console.log(Math.pow(3, 2));
console.log(Math.pow(2, 10));
console.log(Math.round(3.14));
console.log(Math.round(3.54));
console.log(parseInt(3.54));
console.log(Math.round(Math.PI));
console.log(Math.sqrt(8));

console.log(0.9999999999999999999999999999999999999999999999999999999999999);

const students = [
  "강수빈",
  "임태훈",
  "양원철",
  "이선균",
  "김호현",
  "황현준",
  "김보람",
  "이은재",
  "정승교",
  "박상현",
  "전상민",
  "김지훈",
];

function randomStudent(noExist) {
  const tempArr = [];
  for (let i = 0; i < 1000000; i++) {
    const tempRandom = parseInt(Math.random() * students.length);
    if (noExist.indexOf(students[tempRandom]) < 0) {
      tempArr.push(students[tempRandom]);
    }
  }
  const tempObj = {};
  tempArr.forEach((item) => {
    if (!tempObj[item]) tempObj[item] = 0;
    tempObj[item]++;
  });

  return students.reduce((prev, curr) => {
    if (prev == "" || tempObj[prev] < tempObj[curr]) return curr;
    return prev;
  }, "");
}

console.log(randomStudent(["이선균", "김지훈"]));

console.log([...[1, 2, 3, 4, 5], ...[1, 2, 3, 4, 5]]);

const aa = { a: 1, c: 4 };
const bb = { b: 2, c: "632", d: 15 };

console.log({ ...aa, ...bb });

const { a, c } = aa;
console.log(a);
console.log(c);

const itemArr = document.getElementsByClassName("item");
for (let i = 0; i < itemArr.length; ++i) {
  console.log(itemArr[i]);
}

[...document.getElementsByClassName("item")].forEach((item) => {
  console.log(item);
});

const [item1, item2, item3, ...items] = [
  ...document.getElementsByClassName("item"),
];
console.log(item1);
console.log(item2);
console.log(item3);
console.log(items);
