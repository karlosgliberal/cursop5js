var s = 20;
var inc = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(255);

  var count = 0; // crea una variable llamada count
                  // lo usaremos para contar nuestras iteraciones


  for(var x = 50; x <= width-50; x += inc){

    for (var y = 50; y <= height-50; y += inc){
      stroke(count);
      // Y o definimos el tamaño del trazo (strokeWeight) y la escala
      //usando count con una multiplicacion
      //strokeWeight(count*0.2); 
      ellipse(x, y, s, s);
      // incrementmos 1 count
      count++;
    }
  }
}
