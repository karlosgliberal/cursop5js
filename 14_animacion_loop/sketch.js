// declaramos las variables
var x, y;
var inc = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // declaramos x e y en el centro
  x = 0;
  y = height;
}

function draw() {
  background(200);
  // Pintamos un circulos
  stroke(50);
  fill(100);
  for (var i = 20; i <width; i +=inc) {
    ellipse(x+i, y, 24, 24);
  }
  x = x + random(-1, 1);
  y = y - 1;
  // Movemos en eje horizontal de forma loca (aleatoria)
  // movemos para arriba de forma constante

  // Lo reseteamos si llega a cero
  if (y < 0) {
    y = height;
  }
}
