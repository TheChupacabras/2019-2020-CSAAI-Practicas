console.log("Ejecutando JS...");

const grumpy = document.getElementById("grumpy");

const big = document.getElementById("big");
const small = document.getElementById("small");


big.onclick = () => {
 grumpy.width = 350;
 grumpy.height = 350;
}

small.onclick = () => {
  grumpy.width = 200;
  grumpy.height = 200;

}
