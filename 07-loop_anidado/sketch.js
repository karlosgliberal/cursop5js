// Segimos con los loops, los loops son tus amigos
var s = 5; // No seas perecezoso, usa variables molamas
           // cambia y a ver que pasa
function setup() {
  // Utiliza las variables p5 que vinculan el tamaño del lienzo al tamaño de la ventana
  // cambia el tamaño de la ventana y haz clic en refrescar para ver tu cambio de canvas
  createCanvas(windowWidth, windowHeight);
  //quitamos el relleno
  noFill();
}

function draw() {
  background(255);
  // Estructura de loop anidado
  // Itereamos sobre la pantalla de 50 al ancho menos 50
  for(var x = 50; x <= width-50; x += 50){
    // itereamos de arrba a abajo a la altura menos 50
    for (var y = 50; y <= height-50; y +=50){
      line(x - s, y - s, x + s, y + s);
      line(x + s, y - s, x - s, y + s);
    }
  }
}
