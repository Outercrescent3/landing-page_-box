var count = 1
document.getElementById("radio1").checked = true;

// O método seInterval pede dois parametros, 1 é a funãoq ue será executada e o 2 é o tempo em milisegundos
setInterval(function(){
nextImage()
},5000)

function nextImage(){
count++
if(count > 3){
    count =1
  }
  document.getElementById("radio"+ count).checked = true
 }


