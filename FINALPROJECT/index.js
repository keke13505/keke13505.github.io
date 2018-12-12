// $(document).ready(function() {
//   document.onkeypress = function(e) {
//   console.log(e)
//   if (e.key === "w" ) {
//         $("#one").css("background-color", "red");
//   }
// }




document.onkeypress = function(e) {
  console.log(e)
  if (e.key === "1" ) {
   var vid = document.getElementById('vid');
   vid.paused ? vid.play() : vid.pause();
   var vid = document.getElementById('vid').style.opacity = '1';

  } 

  if (e.key === "1" ) {
        $("#one").css("background-color", "#5F54FE");
  
}


  else if (e.key === "2" ) {
   var cami = document.getElementById('cami');
   cami.paused ? cami.play() : cami.pause(); 
   var cami = document.getElementById('cami').style.opacity = '1';

  }

    if (e.key === "2" ) {
       $("#two").css("background-color", "#5F54FE");
  
}



 	else if 	(e.key === "3" ) {
   var night = document.getElementById('night-sv');
   night.paused ? night.play() : night.pause();
   var night = document.getElementById('night-sv').style.opacity = '1';
}

  if (e.key === "3" ) {
        $("#three").css("background-color", "#5F54FE");
  
}

  	else if (e.key === "4" ) {
   var ocean = document.getElementById('ocean');
   ocean.paused ? ocean.play() : ocean.pause(); 
 var ocean = document.getElementById('ocean').style.opacity = '1';
}
  if (e.key === "4" ) {
        $("#four").css("background-color", "#5F54FE");
  
}
  	
	if  (e.key === "5" ) {
   var videos = document.getElementById('main').getElementsByClassName('clips');

   for(var i = 0; i < videos.length; i ++){
     videos[i].paused ? videos[i].play() : videos[i].pause(); 
     videos[i].style.opacity = '1';
   }
}
if (e.key === "5" ) {
        $("#five").css("background-color", "#5F54FE");
  
}


    else if (e.key === "6" ) {
   var jesus = document.getElementById('jesus');
   jesus.paused ? jesus.play() : jesus.pause(); 
 var jesus = document.getElementById('jesus').style.opacity = '1';
}

if (e.key === "6" ) {
        $("#six").css("background-color", "#5F54FE");
  
}

if  (e.key === "7" ) {
   var group = document.getElementById('group').getElementsByClassName('items');

   for(var i = 0; i < group.length; i ++){
     group[i].paused ? group[i].play() : group[i].pause(); 
     group[i].style.opacity = '1';
   }
 }
  if (e.key === "7" ) {
        $("#seven").css("background-color", "#5F54FE");
  
}

  if  (e.key === "8" ) {
   var long = document.getElementById('long').getElementsByClassName('tik');

   for(var i = 0; i < long.length; i ++){
     long[i].paused ? long[i].play() : long[i].pause(); 
     long[i].style.opacity = '1';
     long.volume = 2.0;
   }

   }

   if (e.key === "8" ) {
        $("#eight").css("background-color", "#5F54FE");
  
}


    if  (e.key === "9" ) {
   var pop = document.getElementById('pop').getElementsByClassName('go');

   for(var i = 0; i < pop.length; i ++){
     pop[i].paused ? pop[i].play() : pop[i].pause(); 
     pop[i].style.opacity = '1';
  
 }
}
  if (e.key === "9" ) {
        $("#nine").css("background-color", "#5F54FE");
  
}


    if  (e.key === "q" ) {
   var flow = document.getElementById('flow').getElementsByClassName('drop');

   for(var i = 0; i < flow.length; i ++){
     flow[i].paused ? flow[i].play() : flow[i].pause(); 
     flow[i].style.opacity = '1';

}
}
  if (e.key === "q" ) {
        $("#qq").css("background-color", "#5F54FE");
  
}

}



var music = document.getElementById("music");
music.volume = 0.09

var snowangel = document.getElementById("snowangel");
snowangel.volume = 0.0008;

var loop = document.getElementById("milan");
loop.volume = 0.2

var coors = document.getElementById("sunsetmon");
coors.volume = 0.1;

var ice = document.getElementById("ice");
ice.volume = 0.1;

var amst = document.getElementById("amst");
amst.volume = 0.1;

var vid = document.getElementById("vid");
vid.volume = 0.5;

var dance = document.getElementById("dance");
dance.volume = 0.5;



// pop.addEventListener('ended'), function(){
//   // // Reset the video to 0
//   //     pop.currentTime = 0;
//   // // And play again
//   //     pop.play();
//   //      pop[i].style.opacity = '1';

  




//   	var video = document.getElementsByClassName("clips");
// for (i = 0; i < video.length; i++) {
//   var video = video[i].getElementsByClassName("clips")[0];
//   video.pause();

//  var video = document.getElementsByClassName('clips');
//    video.paused ? video.play() : video[0].pause(); 
//  	var video = document.getElementsByClassName('clips').style.opacity = '1'};







 // var video = document.getElementById('dance');
 // var video = document.getElementById('coding');
 //  var video = document.getElementById('tony');
 // var video = document.getElementById('fuck');


	// document.querySelectorAll('#dance, #coding, #tony, #fuck');
//  	 if  (e.key === "5" ) {
//    var video = document.getElementById('coding');
//    video.paused ? video.play() : video.pause(); 
//  var video = document.getElementById('coding').style.opacity = '1'};
// }





		
// 	(e.key === "3" ) {
//    var video = document.getElementById('nightsv');
//    video.paused ? video.play() : video.pause();
//    var video = document.getElementById('nightsv').style.opacity = '1';false;
// }








// var video = document.getElementById('vid');


// document.onkeypress = function(e) {
//   console.log(e)
//   if (e.key === "1" ) {
//    { video.paused ? video.play() : video.pause(); }
//   }
// };



// var video = document.getElementById('ocean');

// document.onkeypress = function(e) {
//   console.log(e)
//   if (e.key === "2" ) {
//    { video.paused ? video.play() : video.pause(); }
//   }
// };








// var clickable = document.getElementById("clickable");
// var clip = document.getElementById("clip");

// clickable.onclick= function playClip() {

// 	clip.play("clicked")
// }















// var car = document.getElementById('car');

// document.documentElement.addEventListener("keyup", function(e) {
//     var ev = e || window.event; // window.event for IE fallback
//     if(ev.keyCode == 1) {
//         // toggle play/pause
//         if(myVideo.paused) { myVideo.play(); }
//         else { myVideo.pause(); }
//     }
// });


// var video = document.getElementById('car');   
// document.onkeypress = function(e){
//     if((e || window.event).keyCode === 49){
//         video.paused ? video.play() : video.pause();
//     }
// };










// window.addEventListener ("keydown", checkKeyPress, false);

// function checkKeypress (key) {
// 	if (key.keyCode == "65") {
// 		alert("The 'a' letter key has been pressed")
// 	}
// }