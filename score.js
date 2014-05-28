


var p = function( sketch ) {


  sketch.setup = function() {

      canvas = sketch.createCanvas(640, 480);
      canvas.class("scoreCanvas");   //references the HTML
	}



  sketch.draw = function() {
    sketch.clear();

       scoreCanvas.noStroke();
       scoreCanvas.textSize(42);
       scoreCanvas.fill(20, 20, 20, 0.5);
       scoreCanvas.text("Score", 500, 35);
       scoreCanvas.text(myp5.score, 570, 75);


       // scoreKeeper();


  }


}

var scoreCanvas = new p5(p, 'scoreCanvas');