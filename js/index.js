let audioElement = new Audio("./at_my_worst.mp3");
let masterplay = document.getElementById("e");
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});
