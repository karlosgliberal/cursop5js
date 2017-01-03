//Como no nos queremos morir, estan los bucles
//el loop es un de ellos.

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200);
  // Un bucle básico.
  //    inicio    ;  test  ; actualizacion
  for (var i = 0; i < 200; i+=10){
    // instrucción a ejecutar
    line(i, 0, i, height);
  }

  // Descomenta el bucle para pintar un gradiante.
  // de negro a blanco
  // for (var i = 0; i < width; i++){
  //   stroke(i/width * 255);
  //   line(i, 0, i, height);
  // }
}
