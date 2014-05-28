// The Nature of Code, Daniel Shiffman, http://natureofcode.com

// Child class constructor
var ChickenClass = function(position) {
  Vehicle.call(this, position);
};

// Inherit from the parent class
ChickenClass.prototype = Object.create(Vehicle.prototype);
ChickenClass.prototype.constructor = ChickenClass;

// Override the display method
ChickenClass.prototype.display = function() {
//this is where the prototypes get displayed... how do we stop displaying one at a time?
  myp5.stroke(255, 255, 255);
  myp5.strokeWeight(1);
  myp5.pushMatrix();
  myp5.translate(this.position.x, this.position.y);
  //color was here
      myp5.fill(0,255,0,50);
       myp5.image(myp5.chicken, -60,-40, 120, 79);
      // myp5.ellipse(0, 0, 64,64); //debug ellipse

     

 if (!this.isAlive) {
  myp5.fill(255,0,0,100);
    //myp5.ellipse(0, 0, 64,64);

 }

 //if this is dead, delete it from the array************************
 myp5.popMatrix();

}

ChickenClass.prototype.die = function() {

      // var animation1; //not sure I can put this here
      // var whichimage = "chicken";
            // console.log("chick death loop + whichimage = " + whichimage);
            // myp5.animation1.display((MouthCenterX - 50), (MouthCenterY - 50), 100, 100); //display the animation
            //this is the part where I need to change the animation *********************
            // myp5.animation1.next();//pass to the next image 
            // myp5.vehicles.splice(i, 1);
            myp5.score = (myp5.score + 1);
            // console.log('score = ' + myp5.score);
            myp5.health = (myp5.health - 1);
            myp5.bloodsugar = (myp5.bloodsugar + 1);
            // myp5.PacManScore = (myp5.PacManScore + 1);
  }