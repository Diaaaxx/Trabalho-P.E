var corpo = window.document.body


corpo.style.backgroundColor = 
'gray'



function myFunction() {
    timeout = setTimeout(alertFunc, 8000);
  }
  
  function alertFunc() {
    alert("Seu número é!");
  }


const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img");

let idx = 0;

function roleta(){
    idx++;
    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}px)`;
}
setInterval(roleta,80)

var idStr = element.titulo
