var xspacing = 26;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 1.0;      // Start angle at 0
var amplitude = 100.0; // Height of wave
var period = 700.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave
var noiseScale=0.02;

function setup() {
  createCanvas(1200, 960);
  w = width+100;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here
  theta += map(mouseX,0,960,0.01,0.09);
  amplitude = map(mouseY,0,1000,50,400);

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();

  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    for (var j = 0; j < 1000; j += 40) {
      var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
      fill(noiseVal*255,62,118);
      ellipse(x*xspacing+j, height/2+yvalues[x]+j, x*0.5, x*0.5);
    }
  }
}
