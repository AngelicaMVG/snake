var cuadrado = document.getElementById('cuadrado');

function mover(event){
  var tecla = event.keyCode;
  var avanzarX = document.getElementById('cuadrado').offSetTop;
  var avanzarY = document.getElementById('cuadrado').offSetLeft;

  switch (tecla) {
    case 37:
      cuadrado.style.left = avanzarY + 250 +"px";
      break;
    case 38:
      cuadrado.style.top = avanzarX - 250 + 'px';
      break;
    case 39:

     break;
    case 40:

    break;

  }
}
