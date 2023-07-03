// DOM, Document(HTML) Object Model
// MVC
console.log(document);
console.dir(document.head);
console.dir(document.body);

console.log(document.body.innerHTML);
console.log(document.body.innerText);
document.body.innerHTML += "<div>추가중</div>";

document.body.innerHTML = "<div>위에 추가</div>" + document.body.innerHTML;

document.getElementById("root").innerHTML += "<div>루트에 추가중</div>";
console.log(document.getElementById("root").innerHTML);
console.log(document.getElementById("root").outerHTML);

document.getElementById("root").style.border = "1px solid black";
