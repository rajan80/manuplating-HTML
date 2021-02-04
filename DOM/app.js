//Page Load create Button and alert with Hi
document.addEventListener("DOMContentLoaded", function () {
  //n1
  let n1btn = document.createElement("Button");
  n1btn.innerText = "Click Me";
  n1btn.addEventListener("click", function () {
    alert("Hi!");
  });
  document.body.appendChild(n1btn);

  //n2

  let n2textarea = document.querySelectorAll("n1textarea");
  let n2btn = document.querySelectorAll("button")[0];
  n2btn.addEventListener("click", function () {
    alert(n1textarea.value);
  });

  //n3

  let n3Div = document.getElementById("div1");

  n3Div.addEventListener("mouseenter", function () {
    n3Div.style.backgroundColor = "red";
  });
  document.body.appendChild(n3Div);
  n3Div.addEventListener("mouseleave", function () {
    n3Div.style.backgroundColor = "white";
  });
  //n4 Paragraph

  let n4P = document.querySelector("p");
  n4P.addEventListener("click", function () {
    n4P.style.color = getRandomColor();
  });
  // n5

  let n5btn = document.getElementById("name-btn");

  let n5Div = document.getElementById("name-div");
  n5btn.addEventListener("click", function () {
    let span = document.createElement("span");
    span.innerText = "Raj";
    n5Div.appendChild(span);
  });
});
//n6
let n6btn = document.getElementById("name-friends");
let n6ul = document.getElementById("name-id");
let friendArray = ["R", "A", "B", "S", "M", "o", "p", "T", "N", "z"];
let friendindex = 0;
n6btn.addEventListener("click", function () {
  let nli = document.createElement("li");
  nli.innerText = friendArray[friendindex];
  friendindex++;
  n6ul.appendChild(nli);
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
