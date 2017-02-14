// declaramos las variables
var x, y;
var inc = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // declaramos x e y en el centro
  x = width / 2;
  y = height;
}

function draw() {
  background(200);
  // Pintamos un circulos
  stroke(50);
  fill(100);
  ellipse(x+100, y, 24, 24);
  ellipse(x+200, y, 24, 24);
  ellipse(x+400, y, 24, 24);
  ellipse(x+300, y, 24, 24);

  // Movemos en eje horizontal de forma loca (aleatoria)
  x = x + random(-10, 10);
  // movemos para arriba de forma constante
  y = y - 1;

  // Lo reseteamos si llega a cero
  if (y < 0) {
    y = height;
  }
}
