console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");
var scoreD = 0;
var scoreI = 0;

//-- Obtener Sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");
const sonido_tanto = new Audio("pong-tanto.mp3");

// marcador de puntuacion
function marcador(){
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(scoreD, 200, 80);
  ctx.fillText(scoreI, 340, 80);
}

//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  bola.draw();

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //actualizar marcador
  marcador()
}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho
  if (bola.x >= canvas.width) {
    //-- Hay colisión. Cambiar el signo de la bola
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();
    bola.vx = 0;
    bola.vy = bola.vy_ini;
    bola.x = 100;
    bola.y = bola.y_ini;
    scoreD = scoreD +1;

  }

  //-- Comprobar si la bola ha alcanzado el límite izquierdo
  if (bola.x <= 0) {
    //-- Hay colisión. Cambiar el signo de la bola

    sonido_tanto.currentTime = 0;
    sonido_tanto.play();
    bola.vx = 0;
    bola.vy = bola.vy_ini;
    bola.x = 500 ;
    bola.y = bola.y_ini;
    scoreI = scoreI +1;
  }
  //rebote de la bola con el limite inferior
  if (bola.y >= canvas.height) {
    //-- Hay colisión. Cambiar el signo de la bola
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
    bola.vy = bola.vy * -1;


  }
    //rebote de la bola con el limite superior
  if (bola.y <= 0) {
    //-- Hay colisión. Cambiar el signo de la bola
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
    bola.vy = bola.vy *  -1;

  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;
    bola.vy = raqI.v;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
    bola.vx = bola.vx * -1;
    bola.vy = raqD.v;
    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  switch (e.key) {
    case "a":
    if (raqI.y >= 360) {
      raqI.v = 0 ;
    } else {
      raqI.v = raqI.v_ini;
    }
      break;
    case "q":
    if (raqI.y <= 0) {
      raqI.v = 0 ;
    } else {
      raqI.v = raqI.v_ini * -1;
    }
      break;
    case "p":
    if (raqD.y <= 0) {
      raqD.v = 0 ;
    } else {
      raqD.v = raqD.v_ini * -1;
    }
      break;
    case "l":
    if (raqD.y >= 360) {
      raqD.v = 0 ;
    } else {
      raqD.v = raqD.v_ini;
    }
      break;
    case " ":
      //-- Llevar bola a su posicion incicial
      if (bola.x == 500) {
        bola.vx = bola.vx_ini * -1;
      } else if (bola.x == 100) {
        bola.vx = bola.vx_ini;
        bola.vy = bola.vy_ini;
      } else {
        bola.vx= bola.vx;
      }
      //-- Darle velocidad

    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}
