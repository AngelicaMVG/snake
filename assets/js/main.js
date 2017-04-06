var cuadrado = document.getElementById('cuadrado');
var contenedor = document.getElementById('contenedor');
document.addEventListener("keydown", mover);
function mover(event){
  var tecla = event.keyCode;
  var avanzarX = document.getElementById('cuadrado').offsetTop;
  var avanzarY = document.getElementById('cuadrado').offsetLeft;
  var borde = contenedor.style.border;
  switch (tecla) {
    case 37:
      cuadrado.style.left = avanzarY - 20 +"px";
      break;
    case 38:
      cuadrado.style.top = avanzarX - 20 + 'px';
      break;
    case 39:
      cuadrado.style.left = avanzarY + 20 +'px';
     break;
    case 40:
      cuadrado.style.top = avanzarX + 20 +'px';
    break;
  }

  
}
