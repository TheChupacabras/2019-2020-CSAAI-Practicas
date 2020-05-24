console.log("Ejecutando JS...");

//--Obtener los botones
const click = document.getElementById("click")
const what = document.getElementById("what");

//-- Crear los elementos de sonido
const click_sound = new Audio('click.mp3');
const what_sound = new Audio('what.mp3');

click.onclick = () => {
  click_sound.currentTime = 0;
  click_sound.play();
}

what.onclick = () => {
  what_sound.currentTime = 0;
  what_sound.play();
}
//-- Llevar bola a su posicion incicial
if (bola.x == 500) {
  bola.vx = bola.vx_ini * -1;
else if (bola.x == 100){
  bola.vx = bola.vx_ini;
  bola.vy = bola.vy_ini;
}else {
  bola.vx = bola.vx
}

}


if (bola.x == 500) {
  bola.vx = bola.vx_ini * -1;
}else {
  bola.vx = bola.vx_ini;
  bola.vy = bola.vy_ini;
}
