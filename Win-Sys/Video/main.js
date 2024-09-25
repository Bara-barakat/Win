let vd = document.querySelector(".vd");
let checkbox = document.querySelector("#playPauseSwitch");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    vd.pause();
  } else {
    vd.play();
  }
});
