//Por fin vamos a usar el Draw
//var es palabra reservada para definir una variable en javascript
//es diferente declarar que definir
// var hola; declarada
// var movida = 0; declarada y definida;
// Lo miramos en el console de chrome,
// El console es como un bareto de esos que molan pero que si no te llevan no entras

var x = 100;
var y = 100;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  //funcioan como antes pero aqui estan pasando cosas....
  ellipse(x, y, 200, 200); //creamos una ellipse con variables definidas

  line(0, 0, width, height); //posicion arranca en 0.0 y el tamaño igual que el width/height
  console.log("que es esto: "+ width);
  line(width, 0, 0, height); //a la contra
}
