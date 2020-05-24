console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');
const deslizadorv = document.getElementById('deslizadorv');
const deslizadora = document.getElementById('deslizadora');
//-- Valor del deslizador
const range_value = document.getElementById('range_value');
const range_valuev = document.getElementById('range_valuev');
const range_valuea = document.getElementById('range_valuea');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original

  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

  function filtrar(){
  //-- Mostrar el nuevo valor del deslizador
  range_value.innerHTML = deslizador.value;
  range_valuev.innerHTML = deslizadorv.value;
  range_valuea.innerHTML = deslizadora.value;
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia

  ctx.drawImage(img, 0,0);
  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de desliadores
  umbral = deslizador.value
  umbrala = deslizadora.value
  umbralv = deslizadorv.value
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;

    if (data[i+1] > umbralv)
      data[i+1] = umbralv;

    if (data[i+2] > umbrala)
      data[i+2] = umbrala;

  }
  ctx.putImageData(imgData, 0, 0);


}
    deslizador.oninput = () => {
      filtrar()
    }
    deslizadorv.oninput = () => {
      filtrar()
    }
    deslizadora.oninput = () => {
      filtrar()
    }
    botonc.onclick = () => {
      filtrar()
    }
    boton.onclick = () => {
      range_value.innerHTML = deslizador.value;
      range_valuev.innerHTML = deslizadorv.value;
      range_valuea.innerHTML = deslizadora.value;
      //-- Situar la imagen original en el canvas
      //-- No se han hecho manipulaciones todavia

      ctx.drawImage(img, 0,0);
      //-- Obtener la imagen del canvas en pixeles
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      //-- Obtener el array con todos los píxeles
      let data = imgData.data

      //-- Obtener el umbral de desliadores

      //-- Filtrar la imagen según el nuevo umbral
      for (var i = 0; i < data.length; i+=4) {
      R = data[i];
      G = data[i+1];
      B = data[i+2];
      var brillo = (3 *  R + 4*G + 1*B)/8

      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);

  }


console.log("Fin...");
