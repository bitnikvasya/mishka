  var navMain = document.querySelector(".navigation");
  var navToggle = document.querySelector(".navigation__toggle");

  navMain.classList.remove("navigation--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("navigation--closed")) {
      navMain.classList.remove("navigation--closed");
      navMain.classList.add("navigation--opened");
    } else {
      navMain.classList.add("navigation--closed");
      navMain.classList.remove("navigation--opened");
    }
  });

  var link = document.querySelectorAll(".modal-open");
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".modal__close");
  modalButtonArray = Array.prototype.slice.call(link);

  modalButtonArray.forEach(function (el) {
  el.addEventListener("click", function (a) {
    a.preventDefault();
    popup.classList.add("modal-show")
  });
  });


window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (popup.classList.contains("modal-show")) {
popup.classList.remove("modal-show");
}
}
});







close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
});
