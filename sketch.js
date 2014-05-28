// The Nature of Code, Daniel Shiffman http://natureofcode.com
//adapting example 6_08

  var s = function( sketch ) {

      var whichimage = "marshmallowghost";
      // var animation1; //not sure I need to put this here
      //console.log("whichimage in function = " + whichimage);

      // var videostarted = false;  //does nothing
      sketch.vehicles = [];
      var score = 0;  //overall score
      var health = 0;
      var bloodsugar = 0;
      var PacManScore = 0;

      // var name = whichimage;

      // var totalframes = 8;

      var foodArray = new Array(DonutClass, ChickenClass, PacManClass, BaconClass, KaleClass);
      // , ParsleyClass, EdamameClass


  sketch.setup = function() {

      //console.log("whichimage in function = " + whichimage);

      sketch.marshmallowghost = sketch.loadImage("styles/marshmallowghost.png");
      sketch.bacon = sketch.loadImage("styles/bacon.png");
      sketch.donut = sketch.loadImage("styles/donut.png");
      sketch.chicken = sketch.loadImage("styles/chicken.png");
      sketch.pacmanghost = sketch.loadImage("styles/pacmanghost.png"); 
      sketch.kale = sketch.loadImage("styles/kale.png"); 
      sketch.parsley = sketch.loadImage("styles/parsley.png"); 
      sketch.edamame = sketch.loadImage("styles/edamame.png"); 

      sketch.frameRate(30);  //sets the framerate for the whole sketch
      // sketch.animation1 = new Animation(totalframes, 0.2, whichimage);
      // console.log("whichimage setup Animation function = " + whichimage);


      // sketch.animation1.preload(sketch.whichimage);
      // sketch.animation2.preload(nameChicken2);

      canvas = sketch.createCanvas(640, 480);
      canvas.class("p5canvas");   //references the HTML
        // We are now making random sketch.vehicles and storing them in an array
         
        for (var i = 0; i < 16; i++) {
          //var r = sketch.random(1);
          var index = sketch.floor(sketch.random(0,foodArray.length));
          // // sketch.vehicles.push(new Vehicle(350,250));
            // if (r < 0.5) {
              //console.log(index);
              sketch.vehicles.push(new foodArray[index](0,0));
              // } else {
              //   sketch.vehicles.push(new ChickenClass(350,250));
              //  } 
        }
      // console.log("sketch.vehicles.length  = " + sketch.vehicles.length);
      sketch.score = 0;
      sketch.health = 0;
      sketch.bloodsugar = 0;
      sketch.PacManScore = 0;
      }

   sketch.draw = function() {
    sketch.clear();

        
        
         for (var i = sketch.vehicles.length-1; i >= 0; i--) {
        //for (var i = 0; i < sketch.vehicles.length; i++) {
         // console.log("made it to sketch.vehicles.length for loop");
          sketch.vehicles[i].applyBehaviors(sketch.vehicles);
          //console.log("made it to apply behaviors");
          sketch.vehicles[i].update();
          //console.log("made it to update);
          sketch.vehicles[i].borders();
          //console.log("made it to borders");
          sketch.vehicles[i].display(); 
          //console.log("made it to display");
           // console.log("typeof.sketch.vehicles" +  (typeof sketch.vehicles));


          if (!sketch.vehicles[i].isAlive){
               sketch.vehicles[i].die(); 
               //soundEfx.play();
               sketch.vehicles.splice(i, 1);
               soundEfx.play();
            // sketch.animation1.display((MouthCenterX - 50), (MouthCenterY - 50), 100, 100); //display the animation
            // //this is the part where I need to change the animation *********************
            // sketch.animation1.next();//pass to the next image 
            // sketch.vehicles.splice(i, 1);
            // sketch.score = (sketch.score + 1);
            // console.log('score = ' + sketch.score);

          }

         
        }

        if(mouthopen === true){
          sketch.fill(0,255,40);
        } else {  
          sketch.fill(250,25,120);
        }
     // Cheek markers are drawn here
       sketch.noStroke;
       sketch.stroke(255, 255, 255, 0);
       sketch.ellipse((LeftsideOfmouthX-20), (LeftsideOfmouthY-20), 30, 30); //draws a cheek
       sketch.ellipse((RightsideOfmouthX+20), (RightsideOfmouthY-20), 30, 30); //draws a cheek

      
      //console.log(sketch.)

      }

      sketch.reset = function()  {

        if( sketch.vehicles.length <= 5 ){

            for (var i = 0; i < 10; i++) {
            
              var index = sketch.floor(sketch.random(0,foodArray.length));
              
              sketch.vehicles.push(new foodArray[index](0,0));
              sketch.score = 0;
              sketch.health = 0;
              sketch.bloodsugar = 0;
              
            }

        }


      }



 }

var myp5 = new p5(s, 'p5canvas');