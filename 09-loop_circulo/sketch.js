var s = 40; // Variable para el tamaño de la ellipse
var inc = 50; // variable para incrementar la cantidad
              // Las curiosas y curiosos cambiaran estos valores
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);
  // Estructura de loop anidado
  // Itereamos sobre la pantalla de 50 al ancho menos 50
  // Usamos la variable icn para definir el incremento del bucle
  for(var x = 50; x <= width-50; x += inc){
    for (var y = 50; y <= height-50; y += inc){
      //usamos elipes en lugar de lineas y usamos s para definir el su tamaño
      ellipse(x, y, s, s);
    }
  }
}
