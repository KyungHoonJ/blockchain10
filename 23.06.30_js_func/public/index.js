document.getElementById("test").onclick = function test() {
  let num1 = 2;
  let num2 = 2;
  while (num1 < 10) {
    num2 = 2;
    while (num2 < 10) {
      console.log(num1 + " * " + num2 + " = " + num1 * num2++);
    }
    num1 += 1;
  }

  for (let a = 2; a < 10; ++a) {
    for (let b = 1; b < 10; b++) {
      console.log(a + " * " + b + " = " + a * b);
    }
  }

  // 함수 f(x) = y
  function sum(num1, num2) {
    console.log(num1 + "랑 " + num2 + "랑 더해줄거야");
    return num1 + num2;
    console.log("이건 안나와, 왜? 이미 끝났거든");
  }

  // function 함수명(매개변수){코드}

  sum(132, 512);
  // 132 + 512 <= num1 + num2

  console.log(sum(32, 512 - 200));
  console.log("출력하고싶은것");

  // let a = 1;

  function asdf() {
    return asdf();
  }

  // asdf();

  console.log(sum(sum(1, 2), sum(3, sum(4, 5))));
  // 1 + 2 => 4 + 5 => 3 + 9 => 3 + 12 => 15를 출력

  function echoStudent(name, age, job) {
    // 여기에만 작성하시면 됩니다. 코딩하시면
    console.log(
      "학생의 이름은 " +
        name +
        "이고 나이는 " +
        age +
        ", 현재 직업은 " +
        job +
        "입니다."
    );
  }
  echoStudent("양원철", 29, "학생");
  // 학생의 이름은 양원철이고 나이는 29, 현재 직업은 학생입니다.
  const students = [
    {
      name: "강수빈",
      age: 26,
      job: "학생",
      hobby: ["애니감상", "달리기", "팔굽혀펴기"],
    },
    {
      name: "임태훈",
      age: 29,
      job: "학생",
      specialty: [],
    },
  ];

  for (let i = 0; i < students.length; i++) {
    echoStudent(students[i]["name"], students[i].age, students[i].job);
  }

  echoStudent(students[0].name, students[0].age, students[0].job);

  console.log(834381, 910);
};
