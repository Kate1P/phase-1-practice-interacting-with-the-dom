

document.addEventListener('DOMContentLoaded', (counter) => {
   return setInterval(function() {
    var a=document.getElementById("counter"),
    b=parseInt(a.innerText);a.innerText=b+1
    }, 1000);
  }); 
  
let minus = document.querySelector('#plus');
let plus = document.querySelector('#minus');

minus.addEventListener('click', () =>{
    var a=document.getElementById("counter"),
    b=parseInt(a.innerText);a.innerText=b+1
});

plus.addEventListener('click', () =>{
    var a=document.getElementById("counter"),
    b=parseInt(a.innerText);a.innerText=b-1
});

let heart=document.getElementById("heart")
heart.addEventListener("click", () => {
    var a=document.getElementById("counter"),
    b=parseInt(a.innerText);
    c=document.querySelector(".likes"),
    d=void 0;
    
})


