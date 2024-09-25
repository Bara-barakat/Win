(function (global) {
  const VS = function (selector) {
    return new VS.prototype.init();
  };

  VS.prototype = {
    constructor: VS,
    init: function () {
      console.log("Init module!");
    },
    popup: function (message = "", params = {}) {
      let defaults = {
        class: "",
        title: "Popup",
        close: true,
      };

      let o = Object.assign({}, defaults, params);

      let popup = document.getElementById("ppop");

      if (popup) {
        popup.remove();
      }

      popup = document.createElement("div");
      popup.id = "ppop";
      popup.classList.add("ppop");
      popup.classList.add("fade");
      if (o.class) popup.classList.add(o.class);
      document.body.appendChild(popup);

      content = document.createElement("div");
      content.classList.add("content");
      content.innerHTML = message;
      if (o.title) content.setAttribute("data-title", o.title);
      popup.appendChild(content);

      setTimeout(function () {
        popup.classList.add("in");
      }, 300);

      if (o.close) {
        setTimeout(function () {
          popup.classList.remove("in");
        }, 4500);

        setTimeout(function () {
          popup.remove();
        }, 5000);
      }
    },
  };

  VS.prototype.init.prototype = VS.prototype;

  global.$ = VS;

  global.$.Popup = function (message, params) {
    VS().popup(message, params);
  };
})(window);

const groDiv = document.querySelector(".gro");
function hf() {
  groDiv.style.display = "none";
}
