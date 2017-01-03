//para el curso usaremos el estilo de la comunidad, variblas cortas x, y
var x = 0; // definimos una variable

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  x = 1; // asigmamos a la variable x el valor 1 (los tipos de datos no se declaran);
  line(x, 0, x, height); // Usamos x y el altura para crar una recta

  //console.log('antes '+ x);
  x = x + 5; // Ahora magia, x es igual que x mas 5;
  //console.log('despues '+ x);
  line(x, 0, x, height);

  x += 5; // Se puede usar el operador de incremento para añadir a x + 5
  line(x, 0, x, height);

  x += 5; // Otras vez
  line(x, 0, x, height);

  x += 5; // hasta el infinito y más allá https://www.youtube.com/watch?v=nNLfL7d2k-8
  line(x, 0, x, height);
}
