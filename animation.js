  
//this sprite animation is adapted from Sharon Lee De La Cruz: http://unoseistres.com/javascript/comic/comic.html




// function Animation (_framex, _speed, _whichimage)  {
  
//   myp5.whichimage = _whichimage;

//   var framex = _framex;
//   var imageName = _whichimage;  //my addition
//   this.maxImages = framex;
//   this.speed = _speed;//going through the array at this speed 
//   this.imageIndex = 1;
//   this.imageNameArray=[];
//   this.playing = true;
//   // console.log("sketchimage in Animation function = " + sketch.whichimage);
//   console.log("whichimage in Animation function = " + myp5.whichimage);
//   console.log("_whichimage in Animation function = " + _whichimage);

// };

///////////////////PROTOTYPE

// Animation.prototype.preload = function(test) { //load this array of images

// var test1 = test;
  
//    // console.log("whichimage in prototype = " + myp5.whichimage);

//   for (var i = 0; i < this.maxImages; i++){
//     var index = i+1;  // image files start at 1, not 0
//     this.imageNameArray[i] = myp5.loadImage("styles/" + myp5.whichimage + "death/" + test1 + "death0" + (index)+ ".png");
//     console.log("styles/" + myp5.whichimage + "death/" + test1 + "death0" + (index)+ ".png")
//   }
// }

// Animation.prototype.next = function() { //go through this loop
//   if (this.playing) {
//     this.imageIndex = (this.imageIndex + this.speed);
    
//     if (this.imageIndex >= this.maxImages) {
//       this.imageIndex -= this.maxImages;//loop back to the first image
//     }
    
//   }
// }

// Animation.prototype.display = function(_Xpos, _Ypos, _W, _H) { //display like this
// var Xpos = _Xpos;
// var Ypos = _Ypos;
// var W = _W;
// var H = _H;
//   console.log("Did you ever reach this aimation loop");
//   myp5.image(this.imageNameArray[myp5.floor(this.imageIndex)], Xpos, Ypos, W, H);
  // (console.log("in the proto death " + imageNameArray[]);
  //floor is used because the speed cannot be a float so what floor does is tell it draw 
  //it at one second OPP would be celling 
}


