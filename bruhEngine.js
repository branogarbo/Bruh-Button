document.onkeypress = event => {
  if (event.key == "b") {
    var bruhAudio = new Audio('bruh-sound-effect.mp3');
    bruhAudio.play();
  }
};

document.onclick = event => {
  var bruhAudio = new Audio('bruh-sound-effect.mp3');
  bruhAudio.play();
};
