function setup(){
  createCanvas(1024, 768);  // Creas un canvas y defines su tamaño (se ve en el html)
  background(100);          // ponemos el fondo con un solo valor nos dara una escala de grises (de 0, 255)
  strokeWeight(10);         // Definimos el espesor del trazo

  fill(255, 0, 0);          // Definmos el corlor para cualquier forma (rgb)
  rect(100, 100, 300, 300); // pintamos un rectangulo rect(x, y, width, height)

  stroke(0, 255, 255);      // definimos el color de trazo (rojo, verde, azul) rango: 0 - 255
  fill(255, 255, 0, 200);   // cambiamos el color de fondo, fon alpha (transparencia)
  rect(250, 250, 300, 300); // pintamos otro rectangulo

  fill(200, 100);
  stroke(255, 0, 0, 100);
  rect(150, 150, 300, 300);
}

function draw(){
// :( no seas impaciencte. 
}
