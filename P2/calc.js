console.log("Ejecutando JS...");

display = document.getElementById("display")
coma = document.getElementById("coma")
boton0 = document.getElementById("boton0")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
boton3 = document.getElementById("boton3")
boton4 = document.getElementById("boton4")
boton5 = document.getElementById("boton5")
boton6 = document.getElementById("boton6")
boton7 = document.getElementById("boton7")
boton8 = document.getElementById("boton8")
boton9 = document.getElementById("boton9")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
division = document.getElementById("division")
multiplicacion = document.getElementById("multiplicacion")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

// -- Insertar digito .
coma.onclick = () => {
  display.innerHTML +=coma.value;
}

// -- Insertar digito 0
boton0.onclick = () => {
  display.innerHTML += boton0.value;
}

// -- Insertar digito 1
boton1.onclick = () => {
  display.innerHTML += boton1.value;
}

//-- Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += boton2.value;
}

//-- Insertar digito 3
boton3.onclick = () => {
  display.innerHTML += boton3.value;
}

// -- Insertar digito 4
boton4.onclick = () => {
  display.innerHTML += boton4.value;
}

//-- Insertar digito 5
boton5.onclick = () => {
  display.innerHTML += boton5.value;
}

//-- Insertar digito 6
boton6.onclick = () => {
  display.innerHTML += boton6.value;
}

// -- Insertar digito 7
boton7.onclick = () => {
  display.innerHTML += boton7.value;
}

//-- Insertar digito 8
boton8.onclick = () => {
  display.innerHTML += boton8.value;
}

//-- Insertar digito 9
boton9.onclick = () => {
  display.innerHTML += boton9.value;
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += suma.value;
}

//-- Insertar simbolo de restar
resta.onclick = () => {
  display.innerHTML += resta.value;
}

//-- Insertar simbolo de division
division.onclick = () => {
  display.innerHTML += division.value;
}

//-- Insertar simbolo de multiplicacion
multiplicacion.onclick = () => {
  display.innerHTML += multiplicacion.value;
}


//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = " ";
}
