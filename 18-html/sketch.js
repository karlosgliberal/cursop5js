var dancingWords = [];
var miedo = true;

function DanceSpan(element, x, y) {
  element.position(x, y);

  this.brownian = function() {
    x += random(-6, 6);
    y += random(-6, 6);
    element.position(x, y);
  };
};

function setup() {
  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(bailar);
}

function draw() {
  if(miedo)
  for (var i=0; i<dancingWords.length; i++) {
    dancingWords[i].brownian();
  };

}

function bailar(){
  var texts = selectAll('.text');
  for (var i=0; i<texts.length; i++) {
    var paragraph = texts[i].html();
    var words = paragraph.split(' ');
    for (var j=0; j<words.length; j++) {
      var spannedWord = createSpan(words[j]);
      var dw = new DanceSpan(spannedWord, random(600), random(200));
      dancingWords.push(dw);
    };
  };
  miedo = true;
}
