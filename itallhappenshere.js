
var vid = document.getElementById('videoel');  //was videoInput in the other code
var overlay = document.getElementById('overlay');
var p5canvas = document.getElementById('p5canvas');
var overlayCC = overlay.getContext('2d');

var toplip = 0.0;  //my additions
var bottomlip = 0.0;  //my addition
var mouthopen = false;  //my addition
var mouthX = 0.0;   //my addition
var videostarted = false;
var LeftsideOfmouthX = 0.0;
var LeftsideOfmouthY = 0.0;
var RightsideOfmouthX = 0.0;
var RightsideOfmouthY = 0.0;
var MouthCenterX = 0.0;
var MouthCenterY = 0.0;
// var yourScore = 0;
var soundEfx; // Sound Efx tutorial from http://www.onlywebpro.com/2012/03/10/html5-game-development-adding-sound-effects/
//var soundLoad = "over.wav";
// var jawline = []; //it is an array of 0-14 (15 total points)
//I don't actually know how to make an empty javascript array


var ctrack = new clm.tracker({useWebGL : true});
ctrack.init(pModel);

stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.top = '0px';
// document.getElementById('container').appendChild( stats.domElement );
//stats must be defined, but you don't have to draw it.

function enablestart() {
	var startbutton = document.getElementById('startbutton');
	startbutton.value = "start";
	startbutton.disabled = null;
}

var insertAltVideo = function(video) {
	if (supports_video()) {
		if (supports_ogg_theora_video()) {
			video.src = "./media/cap12_edit.ogv";
		} else if (supports_h264_baseline_video()) {
			video.src = "./media/cap12_edit.mp4";
		} else {
			return false;
		}
		video.play();
		return true;
	} else return false;
}
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

// check for camerasupport
if (navigator.getUserMedia) {
	// set up stream
	
	var videoSelector = {video : true};
	if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
		var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
		if (chromeVersion < 20) {
			videoSelector = "video";
		}
	};

	navigator.getUserMedia(videoSelector, function( stream ) {
		if (vid.mozCaptureStream) {
			vid.mozSrcObject = stream;
		} else {
			vid.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
		}
		vid.play();
	}, function() {
		insertAltVideo(vid);
		document.getElementById('gum').className = "hide";
		document.getElementById('nogum').className = "nohide";
		alert("There was some problem trying to fetch video from your webcam, using a fallback video instead.");
	});
} else {
	insertAltVideo(vid);
	document.getElementById('gum').className = "hide";
	document.getElementById('nogum').className = "nohide";
	alert("Your browser does not seem to support getUserMedia, using a fallback video instead.");
}

vid.addEventListener('canplay', enablestart, false);  //was set to false, changing it didn't

function startVideo() {
	// start video
	vid.play();
	// start tracking
	ctrack.start(vid);
	// start loop to draw face
	drawLoop();  //this is calling the draw loop for CLM tracker
	// console.log('Video Start was clicked!!!!!!!');
	videostarted = true;
	//Assign audio to soundEfx
    soundEfx = document.getElementById("soundEfx");
}


function positionLoop() {
  requestAnimationFrame(positionLoop);
  var positions = ctrack.getCurrentPosition();
  // do something with the positions ...
  // print the positions
  var positionString = "";
  if (positions) {
    for (var p = 50;p < 61;p++) {
      //positionString += "featurepoint "+p+" : ["+positions[p][0].toFixed(2)+","+positions[p][1].toFixed(2)+"]<br/>";
       toplip = (positions[60][1]);
       bottomlip = (positions[57][1]);
       mouthX = (positions[57][0]);
       LeftsideOfmouthX = (positions[44][0]);
       LeftsideOfmouthY = (positions[44][1]);
       RightsideOfmouthX = (positions[50][0]);
       RightsideOfmouthY = (positions[50][1]);
       MouthCenterX = (LeftsideOfmouthX + RightsideOfmouthX)/2;
       MouthCenterY = (LeftsideOfmouthY + RightsideOfmouthY)/2;
       }
       
    }
    if ((bottomlip - toplip) >= 5){   //change the distance of the lips here
      mouthopen = true;
      //console.log('your mouth is open')
      document.getElementById('mouthposition').innerHTML = "mouth is open";
      //console.log("LX, LY, RX, RY" + LeftsideOfmouthX + " , " + LeftsideOfmouthY + " , " + RightsideOfmouthX + " , " + RightsideOfmouthY);
	    document.getElementById('overallScore').innerHTML = "Overall Score " + myp5.score;
  	    document.getElementById('healthScore').innerHTML = "   Health " + myp5.health;
	    document.getElementById('bloodSugar').innerHTML = "   Blood Sugar Level " + myp5.bloodsugar;
	    document.getElementById('pacManScore').innerHTML = "   Pac Man Score " + myp5.PacManScore;
    } else {
      mouthopen = false;
      //console.log('your mouth is closed')
      document.getElementById('mouthposition').innerHTML = "mouth is closed";
	 //  	if (myp5.vehicles.length = 0) {
		// startbutton.value = "reset";
		// }
    }



  }

positionLoop();

function drawLoop() {
	requestAnimFrame(drawLoop);
	overlayCC.clearRect(0, 0, 640, 480);  //when you set width and height you also have to clear this part
	//psrElement.innerHTML = "score :" + ctrack.getScore().toFixed(4);
	if (ctrack.getCurrentPosition()) {
		ctrack.draw(overlay);  // comment this out not to see the mask
		//console.log('still tracking the overlay - this is the draw loop');
		//console.log('value = ' + value);
	}
}

// update stats on every iteration
document.addEventListener('clmtrackrIteration', function(event) {   //this line is vital
	stats.update();   //this is apparently necessary
}, false);
