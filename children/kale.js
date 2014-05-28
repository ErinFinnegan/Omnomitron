// The Nature of Code, Daniel Shiffman, http://natureofcode.com

// Child class constructor
var KaleClass = function(position) {
  Vehicle.call(this, position);
};

// Inherit from the parent class
KaleClass.prototype = Object.create(Vehicle.prototype);
KaleClass.prototype.constructor = KaleClass;

// Override the display method
KaleClass.prototype.display = function() {
//this is where the prototypes get displayed... how do we stop displaying one at a time?
  myp5.stroke(255, 255, 255);
  myp5.strokeWeight(1);
  myp5.pushMatrix();
  myp5.translate(this.position.x, this.position.y);
  //color was here
      myp5.fill(0,255,0,50);
       myp5.image(myp5.kale, -60,-80, 118, 162);
       // myp5.ellipse(0, 0, 64,64); //debug ellipse

     

 if (!this.isAlive) {
  myp5.fill(255,0,0,100);
    //myp5.ellipse(0, 0, 64,64);

 }

 //if this is dead, delete it from the array************************
 myp5.popMatrix();

}

KaleClass.prototype.die = function() {

            myp5.score = (myp5.score + 1);
            // console.log('score = ' + myp5.score);
            myp5.health = (myp5.health + 1);
            myp5.bloodsugar = (myp5.bloodsugar - 1);
  }