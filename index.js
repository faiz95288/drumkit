// var noOfButton = document.querySelectorAll(".drum").length;

// function showAlert() {
//     var clicked = this.innerHTML;
//     playSound(ckicked);
// }

// for (var i = 0; i < noOfButton; i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",
// showAlert);
// }

// document.addEventListener("keypress" ,  function (e) {
//     playSound(e.key);
// });

// function playSound(clicked) {
//     switch (clicked) {
//         case "w":
//           var audio = new Audio("sound/tom-1.mp3");
//           audio.play();
//           break;
//           case "a":  
//     }
// }


// function addAnimation(buttonInstance){
//     var
// }

var noOfButton = document.querySelectorAll(".drum").length;

function showAlert() {
  var clicked = this.innerHTML;
  playSound(clicked);
  addAnimation(clicked);
}

for (var i = 0; i < noOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", 
  showAlert);
}

document.addEventListener("keypress", function (e) {
  playSound(e.key);
  addAnimation(e.key);
});

function playSound(clicked) {
  switch (clicked) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      alert("Invalid Key!!!");
      break;
  }
}

function addAnimation(buttonInstance){
  var btn = document.querySelector("."+buttonInstance);
  btn.classList.add("pressed");
  setTimeout(
    function(){btn.classList.remove("pressed")}
    , 100
  );
}
