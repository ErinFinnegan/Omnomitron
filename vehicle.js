// The Nature of Code, Daniel Shiffman http://natureofcode.com
//adapting example 6_08

// Vehicle object
//var log = false; //not sure what that does


	function Vehicle(x, y) {
	  this.isAlive = true;
	  this.position = new PVector(x, y);
	  this.maxspeed = 5;    // Maximum speed  13 is too high
	  this.maxforce = 0.2;  // Maximum steering force was .2
	  this.acceleration = new PVector(0, 0);
	  this.velocity = new PVector(0, 0);
	}


	Vehicle.prototype.applyBehaviors = function(vehicles) {
	   var separateForce = this.separate(myp5.vehicles);
	   var seekForce = this.seek(new PVector(mouthX,bottomlip));
	   //separate Force is better on 4 for the ellipses, but lower for the ghosts
	   separateForce.mult(1);  //how fast do they run away
	   seekForce.mult(1);
	   this.applyForce(separateForce);
	   if (videostarted = true && mouthopen == false){ 
	   this.applyForce(seekForce);
	   //console.log("go for the face!")
		} else {
			seekForce = this.seek(new PVector(0,0));
			//console.log("Avoid the face!")
			seekForce.mult(80);  //make them avoid the face faster!!
		}
	}



	Vehicle.prototype.applyForce = function(force) {
	  // We could add mass here if we want A = F / M
	  this.acceleration.add(force);
	}

	// Separation
	// Method checks for nearby myp5.vehicles and steers away
	Vehicle.prototype.separate = function(vehicles) {
	  // var desiredseparation = this.r*2;
	  var desiredseparation = 100;
	  var sum = new PVector();
	  var count = 0;
	  // For every boid in the system, check if it's too close
	  for (var i = 0; i < myp5.vehicles.length; i++) {
	    var d = PVector.dist(this.position, myp5.vehicles[i].position);
	    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
	    if ((d > 0) && (d < desiredseparation)) {
	      // Calculate vector pointing away from neighbor
	      var diff = PVector.sub(this.position, myp5.vehicles[i].position);
	      diff.normalize();
	      diff.div(d);        // Weight by distance
	      sum.add(diff);
	      count++;            // Keep track of how many
	    }


	  }
	  // Average -- divide by how many
	  if (count > 0) {
	    sum.div(count);
	    // Our desired vector is the average scaled to maximum speed
	    sum.normalize();
	    sum.mult(this.maxspeed);
	    // Implement Reynolds: Steering = Desired - Velocity
	    sum.sub(this.velocity);
	    sum.limit(this.maxforce);
	  }
	  return sum;
	}

	    // A method that calculates a steering force towards a target
	  // STEER = DESIRED MINUS VELOCITY
	Vehicle.prototype.seek = function(target) {
	  var desired = PVector.sub(target,this.position);  // A vector pointing from the location to the target

	  // Normalize desired and scale to maximum speed
	  desired.normalize();
	  desired.mult(this.maxspeed);
	  // Steering = Desired minus velocity
	  var steer = PVector.sub(desired,this.velocity);
	  steer.limit(this.maxforce);  // Limit to maximum steering force    
	  return steer;
	}

	// Method to update location
	Vehicle.prototype.update = function() {
		  // console.log("made it to prototype update");
		  // Update velocity
		  this.velocity.add(this.acceleration);
		  // Limit speed
		  this.velocity.limit(this.maxspeed);
		  this.position.add(this.velocity);
		  // Reset accelertion to 0 each cycle
		  this.acceleration.mult(0);  //the next part is where the targetting happens

		  // targeting for ghost images:
		    if(mouthopen === true && (this.position.y < (bottomlip + 30)) && (this.position.y > (bottomlip-30))) {
		    	if ((this.position.x < (mouthX + 30)) && (this.position.x > (mouthX - 30))){

		    		 this.isAlive = false;
		    		 //console.log(eval(this.isAlive));

			    }
		    }
		    	else {
				  //myp5.fill(0, 0, 255);
				  //console.log("blue is " + eval(this.isAlive));
			    	}
    
		}


	Vehicle.prototype.display = function() {

	  myp5.stroke(255, 255, 255);
	  myp5.strokeWeight(1);
	  myp5.pushMatrix();
	  myp5.translate(this.position.x, this.position.y);
	  myp5.image(myp5.marshmallowghost, -50,-40, 110, 110);

	
	 if (!this.isAlive) {
	 	myp5.fill(255,0,0,100);
	    //myp5.ellipse(0, 0, 64,64);

	 }

	 //if this is dead, delete it from the array************************
	 myp5.popMatrix();

	}

	// Wraparound
	Vehicle.prototype.borders = function() {
	 var width = myp5.width;
	 var height = myp5.height;
	 var buffer = 250;

	  if (this.position.x < -buffer) this.position.x =  width+buffer;
	  if (this.position.y < -buffer) this.position.y = height+buffer;
	  if (this.position.x >  width+buffer) this.position.x = -buffer;
	  if (this.position.y > height+buffer) this.position.y = -buffer;

	}

	Vehicle.prototype.die = function() {

			//var animation1; //not sure I can put this here
  			//var whichimage = "marshmallowghost";
	        // console.log("whichimage in Vehicle prototype = " + whichimage);
	         // console.log("Vehicle death loop");
             // myp5.animation1.display((MouthCenterX - 50), (MouthCenterY - 50), 100, 100); //display the animation
         //    //this is the part where I need to change the animation *********************
         //    myp5.animation1.next();//pass to the next image 
         //    // myp5.vehicles.splice(i, 1);
         //    myp5.score = (myp5.score + 1);
         //    console.log('score = ' + myp5.score);
	}
