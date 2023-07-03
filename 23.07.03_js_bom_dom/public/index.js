// prototype
// 디자인 패턴
// MVC

// prototype, 원형
function Fruit() {
  // 과일
  this.sugar = 5;
  this.size = 10;
  this.seed = true;
  this.weight = 0;
}

const fruit = new Fruit();
console.log(fruit);

function Strawberry() {
  this.sugar = 4;
  this.size = 1;
  this.weight = 1;
}

Strawberry.prototype = fruit;

let strawberry = new Strawberry();
console.log(strawberry);
const strawberry1 = new Strawberry();

console.log(strawberry.seed);

function KingsBerry() {
  this.sugar = 10;
  this.size = 3;
}
KingsBerry.prototype = strawberry1;

const kingsBerry = new KingsBerry();
console.log(kingsBerry.sugar);
console.log(kingsBerry.size);
console.log(kingsBerry.weight);
console.log(kingsBerry.seed);

function Student강수빈() {
  this.name = "강수빈";
  this.age = 26;
  this.hobby = "달리기";
  this.gender = "남자";
}

const 강수빈 = new Student강수빈();
console.log(강수빈);

function Student김호현() {
  this.name = "김호현";
  this.hobby = "여행";
}

Student김호현.prototype = 강수빈;
const 김호현 = new Student김호현();
console.log(김호현);
console.log(김호현.age);

function Student황현준() {
  this.name = "황현준";
  this.age = 28;
}
Student황현준.prototype = 김호현;
const 황현준 = new Student황현준();
김호현.footSize = 265;
console.log(황현준);
console.log(황현준.hobby);
console.log(황현준.gender);
console.log(황현준.footSize);

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.job = "학생";
}

const 양원철 = new Student("양원철", 28);
console.log(양원철);

function Test() {}

Test.prototype = {
  func() {
    console.log("테스트중");
  },
};

const test = new Test();
test.func();
// console.log(test.__proto__);

const number = Number(23);

console.log(a);
var a = 1;

console.log(funcA);
funcA();
function funcA() {
  console.log("테스트중11");
}
