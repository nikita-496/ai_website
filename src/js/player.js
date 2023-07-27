var el = document.getElementById("btn-play");
var close = document.getElementById("close-music");
var playing = false; // текущее состояние плеера

var player = new Audio("../img/item.mp3");
player.preload = "auto";
player.addEventListener("ended", function () {
  // слушаем окончание трека
  el.innerText = "Done";
  playing = false;
});
el.addEventListener("click", playPause); // слушаем нажатие на кнопку
close.addEventListener("click", () => player.pause());
function playPause() {
  if (playing) {
    player.pause();
  } else {
    player.play();
  }
  playing = !playing;
}

$(document).ready(function () {
  var btn = $(".play-btn ");
  btn.click(function () {
    btn.toggleClass("paused");
    return false;
  });
});
