console.log("Ejecutando JS...");

const grumpy = document.getElementById("grumpy");
const play = document.getElementById("play");
const big = document.getElementById("big");
const small = document.getElementById("small");
const time = document.getElementById("time2");

play.onclick = () => {
 if (video.paused)
   video.play()
 else {
   video.pause()
 }
}

big.onclick = () => {
 grumpy.width = 500;
 grumpy.height = 300;
}

small.onclick = () => {
 video.width = 300;
 video.height = 200;
}

time.onclick = () => {
 video.currentTime = 2;
}
