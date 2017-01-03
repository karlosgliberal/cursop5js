//Gora los loops
function setup() {

  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);
  // Estructura de loop anidado
  // Itereamos sobre la pantalla de 50 al ancho menos 50
  for(var x = 50; x <= width-50; x += 50){
    // itereamos de arrba a abajo a la altura menos 50
    for (var y = 50; y <= height-50; y +=50){
      //pintamos la linea desde el centro;
      line(x, y, width/2, height/2);
    }
  }
}
