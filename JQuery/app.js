 $(document).ready(function(){
   let btn=$("<button> button </button>");
   btn.click(function(){
     alert("Hi");
   })
   $("body").append(btn);
  //n2
     let textareabtn  =$("n1textarea");
     let n2textarea= $("textareaSpace");
     n2textarea.click(function(){
       alert(textareabtn.val());

     
  
    //3
    let n3Div=$("div1");
    div1.hoover(function(){
     n3Div.css("background-color","red");
     n3Div.hoover (function(){
     n3Div.css("background-color","white");
     });
    });

    //4
    let n4p=$("p4");
    n4p.click(function(){
      n4p.css("color", getRandomColor() )
    })
    
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
    //n5
    let n5btn=$("n5btn");
    let n5Div=$("name-btn");
    n5btn.click(function(){
      n5Div.append($("<span> Raj </span>"));
    })

 //n6
 let n6btn = $("#name-friends");
 let n6ul = $("#name-id");
 let friendArray = ["R", "A", "B", "S", "M", "o", "p", "T", "N", "z"];
 let friendindex = 0;
 n6btn.addEventListener("click", function () {
   let nli = document.createElement("li");
   nli.innerText = friendArray[friendindex];
   friendindex++;
   n6ul.appendChild(nli);

    
 });
       
 });
});