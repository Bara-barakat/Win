let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload"); 

window.onload = function () {
  if (navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
};

window.addEventListener("online", onLine);
window.addEventListener("offline", offLine);

function onLine() {
  title.innerHTML = "Online Now";
  title.style.color = "green";
  ul.classList.add("hidenet"); 
  if (reload) {
    reload.classList.add("hidenet"); 
  }
}

function offLine() {
  title.innerHTML = "Offline Now";
  title.style.color = "#666";
  ul.classList.remove("hidenet"); 
  if (reload) {
    reload.classList.remove("hidenet"); 
  }
}


