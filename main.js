let img = document.getElementById("img");
let inp = document.querySelector("input");
let log = document.getElementsByClassName("log");

img.addEventListener("click", function () {
  let value = inp.value;

  if (value === "") {
    inp.value = "Please enter a value";
  } else {
    for (let i = 0; i < log.length; i++) {
      log[i].style.display = "block";
    }

    setTimeout(function () {
      window.location.href = "./Win-Sys/index.html";
    }, 2000);
  }
});
