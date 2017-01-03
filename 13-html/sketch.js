var input, button, greeting;

function setup() {

  // create canvas
  createCanvas(windowWidth, windowHeight);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Pon lo que quieras');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('Kaixo '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}
