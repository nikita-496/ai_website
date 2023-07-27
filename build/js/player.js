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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcGxheVwiKTtcbnZhciBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbXVzaWNcIik7XG52YXIgcGxheWluZyA9IGZhbHNlOyAvLyDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0L/Qu9C10LXRgNCwXG5cbnZhciBwbGF5ZXIgPSBuZXcgQXVkaW8oXCIuLi9pbWcvaXRlbS5tcDNcIik7XG5wbGF5ZXIucHJlbG9hZCA9IFwiYXV0b1wiO1xucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIC8vINGB0LvRg9GI0LDQtdC8INC+0LrQvtC90YfQsNC90LjQtSDRgtGA0LXQutCwXG4gIGVsLmlubmVyVGV4dCA9IFwiRG9uZVwiO1xuICBwbGF5aW5nID0gZmFsc2U7XG59KTtcbmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5UGF1c2UpOyAvLyDRgdC70YPRiNCw0LXQvCDQvdCw0LbQsNGC0LjQtSDQvdCwINC60L3QvtC/0LrRg1xuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHBsYXllci5wYXVzZSgpKTtcbmZ1bmN0aW9uIHBsYXlQYXVzZSgpIHtcbiAgaWYgKHBsYXlpbmcpIHtcbiAgICBwbGF5ZXIucGF1c2UoKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIucGxheSgpO1xuICB9XG4gIHBsYXlpbmcgPSAhcGxheWluZztcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICB2YXIgYnRuID0gJChcIi5wbGF5LWJ0biBcIik7XG4gIGJ0bi5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgYnRuLnRvZ2dsZUNsYXNzKFwicGF1c2VkXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59KTtcbiJdLCJmaWxlIjoicGxheWVyLmpzIn0=
