
var today = new Date();
 
// obtener la fecha y la hora
var now = today.toLocaleString();
console.log(now);
document.getElementById ('boton').onclick=function(){
    console.log("Capturamos el evento Click");
    document.getElementById("demo").innerHTML = today;
}