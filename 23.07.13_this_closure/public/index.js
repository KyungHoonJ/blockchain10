console.log(this);

({
  a: 1,
  checkThis() {
    console.log(this);
  },
}).checkThis();

{
  let a = 1;
  const b = 2;
}

class Test {
  name;
  #age;
  static area;

  constructor() {
    this.func = function () {};
  }
  checkThis() {
    console.log(this);
  }
  checkThisArrow = () => {
    console.log(this);
  };
}

console.dir(Test);
// Object.keys();
// Object.values();
// Date.now();

const test = new Test();
test.checkThis();
test.checkThisArrow();
// console.log(test.__proto__);

function TestFunc() {
  this.func = function () {};
}
TestFunc.area = "hello";
console.log(TestFunc.area);
TestFunc.prototype.checkThis = function () {
  console.log(this);
};
TestFunc.prototype.checkThisArrow = () => {
  console.log(this);
};

const testFunc = new TestFunc();
testFunc.checkThis();
testFunc.checkThisArrow();
testFunc.checkThisArrow2 = () => {
  console.log(this);
};

testFunc.checkThisArrow2();

const temp = {
  checkThis() {
    // const that = temp;
    if (this == temp) {
      console.log("같다");
    } else {
      console.log("다르다");
    }
  },
};
temp.checkThis();

test.checkThis.bind(window)();
test.checkThis.bind(testFunc)();
const testTemp = test.checkThis.bind(temp);
testTemp();
test.checkThis();

const student = {
  name: "전상민",
  info() {
    console.log(`내 이름은 ${this.name}입니다.`);
  },
};
const student2 = { name: "박상현" };
student2.info = student.info.bind({ name: "김호현" });
student2.info();
student.info();

test.checkThisArrow.bind(testFunc)();
test.checkThisArrow.bind(window)();

// console.dir(Number);
Symbol();
// [].values
// (new Array()).values
// Array.

// 클로저, Closure
function closure() {
  let a = 3725;
  return {
    b: a,
    func: function () {
      console.log(a);
    },
  };
}
const tempClosure = closure();
// console.log(tempClosure());
console.dir(tempClosure);
console.dir(closure);
console.dir(test.checkThis);
