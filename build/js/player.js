$(function () {
  var playerTrack = $("#player-track"),
    bgArtwork = $("#bg-artwork"),
    bgArtworkUrl,
    albumName = $("#album-name"),
    trackName = $("#track-name"),
    albumArt = $("#album-art"),
    sArea = $("#s-area"),
    seekBar = $("#seek-bar"),
    trackTime = $("#track-time"),
    insTime = $("#ins-time"),
    sHover = $("#s-hover"),
    playPauseButton = $("#play-pause-button"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time"),
    tTime = $("#track-length"),
    closeMusic = $("#close-music"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime;
  (nTime = 0),
    (buffInterval = null),
    (tFlag = false),
    (albums = ["AI-Driven Music"]),
    (trackNames = [
      "AI - Song #1",
      "Alex Skrindo - Me & You",
      "Kaaze - Electro Boy",
      "Jordan Schor - Home",
      "Martin Garrix - Proxy",
    ]),
    (albumArtworks = ["_1", "_2", "_3", "_4", "_5"]),
    (trackUrl = ["../img/item.mp3"]),
    (playPreviousTrackButton = $("#play-previous")),
    (playNextTrackButton = $("#play-next")),
    (currIndex = -1);

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        console.log("paused", i);
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        i.attr("class", "fas fa-pause");
        audio.play();
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        i.attr("class", "fas fa-play");
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      i.attr("class", "fa fa-play");
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;
    else --currIndex;

    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
        i.attr("class", "fa fa-pause");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      currAlbum = albums[currIndex];
      currTrackName = trackNames[currIndex];
      currArtwork = albumArtworks[currIndex];

      audio.src = trackUrl[currIndex];

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img.active").removeClass("active");
      $("#" + currArtwork).addClass("active");

      bgArtworkUrl = $("#" + currArtwork).attr("src");

      bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
    } else {
      if (flag == 0 || flag == 1) --currIndex;
      else ++currIndex;
    }
  }

  closeMusic.on("click", () => audio.pause());

  function initPlayer() {
    audio = new Audio();

    selectTrack(0);

    audio.loop = false;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.on("click", function () {
      selectTrack(1);
    });
  }

  initPlayer();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwbGF5ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gIHZhciBwbGF5ZXJUcmFjayA9ICQoXCIjcGxheWVyLXRyYWNrXCIpLFxuICAgIGJnQXJ0d29yayA9ICQoXCIjYmctYXJ0d29ya1wiKSxcbiAgICBiZ0FydHdvcmtVcmwsXG4gICAgYWxidW1OYW1lID0gJChcIiNhbGJ1bS1uYW1lXCIpLFxuICAgIHRyYWNrTmFtZSA9ICQoXCIjdHJhY2stbmFtZVwiKSxcbiAgICBhbGJ1bUFydCA9ICQoXCIjYWxidW0tYXJ0XCIpLFxuICAgIHNBcmVhID0gJChcIiNzLWFyZWFcIiksXG4gICAgc2Vla0JhciA9ICQoXCIjc2Vlay1iYXJcIiksXG4gICAgdHJhY2tUaW1lID0gJChcIiN0cmFjay10aW1lXCIpLFxuICAgIGluc1RpbWUgPSAkKFwiI2lucy10aW1lXCIpLFxuICAgIHNIb3ZlciA9ICQoXCIjcy1ob3ZlclwiKSxcbiAgICBwbGF5UGF1c2VCdXR0b24gPSAkKFwiI3BsYXktcGF1c2UtYnV0dG9uXCIpLFxuICAgIGkgPSBwbGF5UGF1c2VCdXR0b24uZmluZChcImlcIiksXG4gICAgdFByb2dyZXNzID0gJChcIiNjdXJyZW50LXRpbWVcIiksXG4gICAgdFRpbWUgPSAkKFwiI3RyYWNrLWxlbmd0aFwiKSxcbiAgICBjbG9zZU11c2ljID0gJChcIiNjbG9zZS1tdXNpY1wiKSxcbiAgICBzZWVrVCxcbiAgICBzZWVrTG9jLFxuICAgIHNlZWtCYXJQb3MsXG4gICAgY00sXG4gICAgY3RNaW51dGVzLFxuICAgIGN0U2Vjb25kcyxcbiAgICBjdXJNaW51dGVzLFxuICAgIGN1clNlY29uZHMsXG4gICAgZHVyTWludXRlcyxcbiAgICBkdXJTZWNvbmRzLFxuICAgIHBsYXlQcm9ncmVzcyxcbiAgICBiVGltZTtcbiAgKG5UaW1lID0gMCksXG4gICAgKGJ1ZmZJbnRlcnZhbCA9IG51bGwpLFxuICAgICh0RmxhZyA9IGZhbHNlKSxcbiAgICAoYWxidW1zID0gW1wiQUktRHJpdmVuIE11c2ljXCJdKSxcbiAgICAodHJhY2tOYW1lcyA9IFtcbiAgICAgIFwiQUkgLSBTb25nICMxXCIsXG4gICAgICBcIkFsZXggU2tyaW5kbyAtIE1lICYgWW91XCIsXG4gICAgICBcIkthYXplIC0gRWxlY3RybyBCb3lcIixcbiAgICAgIFwiSm9yZGFuIFNjaG9yIC0gSG9tZVwiLFxuICAgICAgXCJNYXJ0aW4gR2Fycml4IC0gUHJveHlcIixcbiAgICBdKSxcbiAgICAoYWxidW1BcnR3b3JrcyA9IFtcIl8xXCIsIFwiXzJcIiwgXCJfM1wiLCBcIl80XCIsIFwiXzVcIl0pLFxuICAgICh0cmFja1VybCA9IFtcIi4uL2ltZy9pdGVtLm1wM1wiXSksXG4gICAgKHBsYXlQcmV2aW91c1RyYWNrQnV0dG9uID0gJChcIiNwbGF5LXByZXZpb3VzXCIpKSxcbiAgICAocGxheU5leHRUcmFja0J1dHRvbiA9ICQoXCIjcGxheS1uZXh0XCIpKSxcbiAgICAoY3VyckluZGV4ID0gLTEpO1xuXG4gIGZ1bmN0aW9uIHBsYXlQYXVzZSgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChhdWRpby5wYXVzZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXVzZWRcIiwgaSk7XG4gICAgICAgIHBsYXllclRyYWNrLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBhbGJ1bUFydC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgY2hlY2tCdWZmZXJpbmcoKTtcbiAgICAgICAgaS5hdHRyKFwiY2xhc3NcIiwgXCJmYXMgZmEtcGF1c2VcIik7XG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllclRyYWNrLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBhbGJ1bUFydC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChidWZmSW50ZXJ2YWwpO1xuICAgICAgICBhbGJ1bUFydC5yZW1vdmVDbGFzcyhcImJ1ZmZlcmluZ1wiKTtcbiAgICAgICAgaS5hdHRyKFwiY2xhc3NcIiwgXCJmYXMgZmEtcGxheVwiKTtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9LCAzMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0hvdmVyKGV2ZW50KSB7XG4gICAgc2Vla0JhclBvcyA9IHNBcmVhLm9mZnNldCgpO1xuICAgIHNlZWtUID0gZXZlbnQuY2xpZW50WCAtIHNlZWtCYXJQb3MubGVmdDtcbiAgICBzZWVrTG9jID0gYXVkaW8uZHVyYXRpb24gKiAoc2Vla1QgLyBzQXJlYS5vdXRlcldpZHRoKCkpO1xuXG4gICAgc0hvdmVyLndpZHRoKHNlZWtUKTtcblxuICAgIGNNID0gc2Vla0xvYyAvIDYwO1xuXG4gICAgY3RNaW51dGVzID0gTWF0aC5mbG9vcihjTSk7XG4gICAgY3RTZWNvbmRzID0gTWF0aC5mbG9vcihzZWVrTG9jIC0gY3RNaW51dGVzICogNjApO1xuXG4gICAgaWYgKGN0TWludXRlcyA8IDAgfHwgY3RTZWNvbmRzIDwgMCkgcmV0dXJuO1xuXG4gICAgaWYgKGN0TWludXRlcyA8IDAgfHwgY3RTZWNvbmRzIDwgMCkgcmV0dXJuO1xuXG4gICAgaWYgKGN0TWludXRlcyA8IDEwKSBjdE1pbnV0ZXMgPSBcIjBcIiArIGN0TWludXRlcztcbiAgICBpZiAoY3RTZWNvbmRzIDwgMTApIGN0U2Vjb25kcyA9IFwiMFwiICsgY3RTZWNvbmRzO1xuXG4gICAgaWYgKGlzTmFOKGN0TWludXRlcykgfHwgaXNOYU4oY3RTZWNvbmRzKSkgaW5zVGltZS50ZXh0KFwiLS06LS1cIik7XG4gICAgZWxzZSBpbnNUaW1lLnRleHQoY3RNaW51dGVzICsgXCI6XCIgKyBjdFNlY29uZHMpO1xuXG4gICAgaW5zVGltZS5jc3MoeyBsZWZ0OiBzZWVrVCwgXCJtYXJnaW4tbGVmdFwiOiBcIi0yMXB4XCIgfSkuZmFkZUluKDApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUhvdmVyKCkge1xuICAgIHNIb3Zlci53aWR0aCgwKTtcbiAgICBpbnNUaW1lLnRleHQoXCIwMDowMFwiKS5jc3MoeyBsZWZ0OiBcIjBweFwiLCBcIm1hcmdpbi1sZWZ0XCI6IFwiMHB4XCIgfSkuZmFkZU91dCgwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlGcm9tQ2xpY2tlZFBvcygpIHtcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IHNlZWtMb2M7XG4gICAgc2Vla0Jhci53aWR0aChzZWVrVCk7XG4gICAgaGlkZUhvdmVyKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDdXJyVGltZSgpIHtcbiAgICBuVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgblRpbWUgPSBuVGltZS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoIXRGbGFnKSB7XG4gICAgICB0RmxhZyA9IHRydWU7XG4gICAgICB0cmFja1RpbWUuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuXG4gICAgY3VyTWludXRlcyA9IE1hdGguZmxvb3IoYXVkaW8uY3VycmVudFRpbWUgLyA2MCk7XG4gICAgY3VyU2Vjb25kcyA9IE1hdGguZmxvb3IoYXVkaW8uY3VycmVudFRpbWUgLSBjdXJNaW51dGVzICogNjApO1xuXG4gICAgZHVyTWludXRlcyA9IE1hdGguZmxvb3IoYXVkaW8uZHVyYXRpb24gLyA2MCk7XG4gICAgZHVyU2Vjb25kcyA9IE1hdGguZmxvb3IoYXVkaW8uZHVyYXRpb24gLSBkdXJNaW51dGVzICogNjApO1xuXG4gICAgcGxheVByb2dyZXNzID0gKGF1ZGlvLmN1cnJlbnRUaW1lIC8gYXVkaW8uZHVyYXRpb24pICogMTAwO1xuXG4gICAgaWYgKGN1ck1pbnV0ZXMgPCAxMCkgY3VyTWludXRlcyA9IFwiMFwiICsgY3VyTWludXRlcztcbiAgICBpZiAoY3VyU2Vjb25kcyA8IDEwKSBjdXJTZWNvbmRzID0gXCIwXCIgKyBjdXJTZWNvbmRzO1xuXG4gICAgaWYgKGR1ck1pbnV0ZXMgPCAxMCkgZHVyTWludXRlcyA9IFwiMFwiICsgZHVyTWludXRlcztcbiAgICBpZiAoZHVyU2Vjb25kcyA8IDEwKSBkdXJTZWNvbmRzID0gXCIwXCIgKyBkdXJTZWNvbmRzO1xuXG4gICAgaWYgKGlzTmFOKGN1ck1pbnV0ZXMpIHx8IGlzTmFOKGN1clNlY29uZHMpKSB0UHJvZ3Jlc3MudGV4dChcIjAwOjAwXCIpO1xuICAgIGVsc2UgdFByb2dyZXNzLnRleHQoY3VyTWludXRlcyArIFwiOlwiICsgY3VyU2Vjb25kcyk7XG5cbiAgICBpZiAoaXNOYU4oZHVyTWludXRlcykgfHwgaXNOYU4oZHVyU2Vjb25kcykpIHRUaW1lLnRleHQoXCIwMDowMFwiKTtcbiAgICBlbHNlIHRUaW1lLnRleHQoZHVyTWludXRlcyArIFwiOlwiICsgZHVyU2Vjb25kcyk7XG5cbiAgICBpZiAoXG4gICAgICBpc05hTihjdXJNaW51dGVzKSB8fFxuICAgICAgaXNOYU4oY3VyU2Vjb25kcykgfHxcbiAgICAgIGlzTmFOKGR1ck1pbnV0ZXMpIHx8XG4gICAgICBpc05hTihkdXJTZWNvbmRzKVxuICAgIClcbiAgICAgIHRyYWNrVGltZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICBlbHNlIHRyYWNrVGltZS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgIHNlZWtCYXIud2lkdGgocGxheVByb2dyZXNzICsgXCIlXCIpO1xuXG4gICAgaWYgKHBsYXlQcm9ncmVzcyA9PSAxMDApIHtcbiAgICAgIGkuYXR0cihcImNsYXNzXCIsIFwiZmEgZmEtcGxheVwiKTtcbiAgICAgIHNlZWtCYXIud2lkdGgoMCk7XG4gICAgICB0UHJvZ3Jlc3MudGV4dChcIjAwOjAwXCIpO1xuICAgICAgYWxidW1BcnQucmVtb3ZlQ2xhc3MoXCJidWZmZXJpbmdcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICBjbGVhckludGVydmFsKGJ1ZmZJbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tCdWZmZXJpbmcoKSB7XG4gICAgY2xlYXJJbnRlcnZhbChidWZmSW50ZXJ2YWwpO1xuICAgIGJ1ZmZJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChuVGltZSA9PSAwIHx8IGJUaW1lIC0gblRpbWUgPiAxMDAwKSBhbGJ1bUFydC5hZGRDbGFzcyhcImJ1ZmZlcmluZ1wiKTtcbiAgICAgIGVsc2UgYWxidW1BcnQucmVtb3ZlQ2xhc3MoXCJidWZmZXJpbmdcIik7XG5cbiAgICAgIGJUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgIGJUaW1lID0gYlRpbWUuZ2V0VGltZSgpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RUcmFjayhmbGFnKSB7XG4gICAgaWYgKGZsYWcgPT0gMCB8fCBmbGFnID09IDEpICsrY3VyckluZGV4O1xuICAgIGVsc2UgLS1jdXJySW5kZXg7XG5cbiAgICBpZiAoY3VyckluZGV4ID4gLTEgJiYgY3VyckluZGV4IDwgYWxidW1BcnR3b3Jrcy5sZW5ndGgpIHtcbiAgICAgIGlmIChmbGFnID09IDApIGkuYXR0cihcImNsYXNzXCIsIFwiZmEgZmEtcGxheVwiKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBhbGJ1bUFydC5yZW1vdmVDbGFzcyhcImJ1ZmZlcmluZ1wiKTtcbiAgICAgICAgaS5hdHRyKFwiY2xhc3NcIiwgXCJmYSBmYS1wYXVzZVwiKTtcbiAgICAgIH1cblxuICAgICAgc2Vla0Jhci53aWR0aCgwKTtcbiAgICAgIHRyYWNrVGltZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgIHRQcm9ncmVzcy50ZXh0KFwiMDA6MDBcIik7XG4gICAgICB0VGltZS50ZXh0KFwiMDA6MDBcIik7XG5cbiAgICAgIGN1cnJBbGJ1bSA9IGFsYnVtc1tjdXJySW5kZXhdO1xuICAgICAgY3VyclRyYWNrTmFtZSA9IHRyYWNrTmFtZXNbY3VyckluZGV4XTtcbiAgICAgIGN1cnJBcnR3b3JrID0gYWxidW1BcnR3b3Jrc1tjdXJySW5kZXhdO1xuXG4gICAgICBhdWRpby5zcmMgPSB0cmFja1VybFtjdXJySW5kZXhdO1xuXG4gICAgICBuVGltZSA9IDA7XG4gICAgICBiVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICBiVGltZSA9IGJUaW1lLmdldFRpbWUoKTtcblxuICAgICAgaWYgKGZsYWcgIT0gMCkge1xuICAgICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAgIHBsYXllclRyYWNrLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBhbGJ1bUFydC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICBjbGVhckludGVydmFsKGJ1ZmZJbnRlcnZhbCk7XG4gICAgICAgIGNoZWNrQnVmZmVyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGFsYnVtTmFtZS50ZXh0KGN1cnJBbGJ1bSk7XG4gICAgICB0cmFja05hbWUudGV4dChjdXJyVHJhY2tOYW1lKTtcbiAgICAgIGFsYnVtQXJ0LmZpbmQoXCJpbWcuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgJChcIiNcIiArIGN1cnJBcnR3b3JrKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgYmdBcnR3b3JrVXJsID0gJChcIiNcIiArIGN1cnJBcnR3b3JrKS5hdHRyKFwic3JjXCIpO1xuXG4gICAgICBiZ0FydHdvcmsuY3NzKHsgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKFwiICsgYmdBcnR3b3JrVXJsICsgXCIpXCIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmbGFnID09IDAgfHwgZmxhZyA9PSAxKSAtLWN1cnJJbmRleDtcbiAgICAgIGVsc2UgKytjdXJySW5kZXg7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VNdXNpYy5vbihcImNsaWNrXCIsICgpID0+IGF1ZGlvLnBhdXNlKCkpO1xuXG4gIGZ1bmN0aW9uIGluaXRQbGF5ZXIoKSB7XG4gICAgYXVkaW8gPSBuZXcgQXVkaW8oKTtcblxuICAgIHNlbGVjdFRyYWNrKDApO1xuXG4gICAgYXVkaW8ubG9vcCA9IGZhbHNlO1xuXG4gICAgcGxheVBhdXNlQnV0dG9uLm9uKFwiY2xpY2tcIiwgcGxheVBhdXNlKTtcblxuICAgIHNBcmVhLm1vdXNlbW92ZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHNob3dIb3ZlcihldmVudCk7XG4gICAgfSk7XG5cbiAgICBzQXJlYS5tb3VzZW91dChoaWRlSG92ZXIpO1xuXG4gICAgc0FyZWEub24oXCJjbGlja1wiLCBwbGF5RnJvbUNsaWNrZWRQb3MpO1xuXG4gICAgJChhdWRpbykub24oXCJ0aW1ldXBkYXRlXCIsIHVwZGF0ZUN1cnJUaW1lKTtcblxuICAgIHBsYXlQcmV2aW91c1RyYWNrQnV0dG9uLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZWN0VHJhY2soLTEpO1xuICAgIH0pO1xuICAgIHBsYXlOZXh0VHJhY2tCdXR0b24ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxlY3RUcmFjaygxKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRQbGF5ZXIoKTtcbn0pO1xuIl0sImZpbGUiOiJwbGF5ZXIuanMifQ==
