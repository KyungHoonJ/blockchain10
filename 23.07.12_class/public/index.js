// Prototype : 객체를 찍어내는 도장
// Class : 객체를 찍어내는 도장
class Counter {
  count;
  name;
  #pricount;
  // private countPri;
  // protected countChild;
  // public countPub;

  constructor(name) {
    this.count = 0;
    this.name = name;
    this.#pricount = 0;
    // this.inincrease = function () {
    //   this.count += 1;
    // };
  }

  increase() {
    console.log(this);
    this.count += 1;
  }
  checkThis = () => {
    console.log(this);
  };
  getPricount() {
    return this.#pricount;
  }
  increasePri() {
    this.#pricount += 1;
  }
}

const count = new Counter("클래스");
let tempCount = count.getPricount();
console.log(tempCount++);
console.log(tempCount);
console.log(count.getPricount());
console.log(count.increasePri());
console.log(count.getPricount());
// console.log(count.#pricount);
count.increase();
count.checkThis();

class Counter2 extends Counter {
  //   constructor(name) {
  //     super(name);
  //     // super는 Counter 즉 부모 클래스를 말합니다.
  //   }
}

const count2 = new Counter2("자식 클래스");
// console.log(count2.#pricount);

function CounterFunc(name) {
  this.count = 0;
  this.name = name;
  //   this.#test = "";
  //   this.inincrease = function () {
  //     this.count += 1;
  //   };
}

CounterFunc.prototype.increase = function () {
  console.log(this);
  this.count += 1;
};

CounterFunc.prototype.checkThis = () => {
  console.log(this);
};

const countFunc = new CounterFunc("프로토타입");
console.log(countFunc);
countFunc.increase();
countFunc.checkThis();

function CounterFunc2(name) {
  this.name = name;
}

CounterFunc2.prototype = countFunc;
const countFunc2 = new CounterFunc2("자식 프로토타입");
console.log(countFunc2);

class Counter3 extends CounterFunc {}

const count3 = new Counter3("함수를 상속한 클래스");
console.log(count3);

function CounterFunc3() {}

CounterFunc3.prototype = count;
const countFunc3 = new CounterFunc3("클래스 인스턴스를 연결한 프로토타입");
console.log(countFunc3);

// console.log(this);

class BoardItem {
  title;
  text;
  #creator;
  #createdAt;
  #comment;

  constructor(title, text, creator) {
    this.title = title;
    this.text = text;
    this.#creator = creator;
    this.#createdAt = new Date().toString();
    this.#comment = [];
  }
  getCreator() {
    return this.#creator;
    // return { ...this.#creator };
  }
  getCreatedAt() {
    return this.#createdAt;
  }
  getComment() {
    return this.#comment;
  }
  addComment(comment) {
    this.#comment.push(comment);
  }
}

class User {
  #name;
  popular;

  constructor(name) {
    this.#name = name;
    this.popular = 0;
  }

  getName() {
    return this.#name;
  }
}

class CommentItem {
  text;
  #creator;
  constructor(text, creator) {
    this.text = text;
    this.#creator = creator;
  }

  getCreator() {
    return this.#creator;
  }
}

const student1 = new User("강수빈");
const student2 = new User("김호현");
const student3 = new User("황현준");

const tempboard = new BoardItem(
  "testing",
  "asetesafdsaf",
  student1
  // {
  //   name: "강수빈",
  //   popular: 0,
  //   getName() {
  //     return this.name;
  //   },
  // }
);

console.log(tempboard.getCreator()["#name"]);
tempboard.getCreator()["#name"] = "이은재";
console.log(tempboard.getCreator()["#name"]);

tempboard.addComment(new CommentItem("esaesvr", student2));
tempboard.addComment(new CommentItem("terdf", student3));

const board = [
  //   {
  //     title: "asdf",
  //     text: "inner Text",
  //     creator: { name: "박상현", popular: 10 },
  //     createdAt: "2023-07-12 11:44",
  //     comment: [
  //       {
  //         text: "comment 내용",
  //         creator: {
  //           name: "강수빈",
  //           popular: 100,
  //         },
  //       },
  //       {
  //         text: "comment 내용 2",
  //         creator: {
  //           name: "이선균",
  //           popular: 1,
  //         },
  //       },
  //     ],
  //   },
];

board.push(tempboard);

const rootElem = document.getElementById("root");
board.forEach((item) => {
  rootElem.innerHTML += `<div>${item.title}</div>
    <div>${item.text}</div>
    <div>
        <div>${item.getCreator().getName()}</div>
        <div>${item.getCreator().popular}</div>
    </div>
    <div>${item.getCreatedAt()}</div>
    <div>
    ${item.getComment().map((item1) => {
      return `<div>${item1.text}</div>
        <div>
            <div>${item1.getCreator().getName()}</div>
            <div>${item1.getCreator().popular}</div>
        </div>`;
    })}
    </div>`;
});
