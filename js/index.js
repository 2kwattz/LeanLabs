document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;

        if (scroll > 0) {
            document.querySelector("header").classList.add("box-shadow-scroll");
        } else {
            document.querySelector("header").classList.remove("box-shadow-scroll");
        }
    });
});

// Popover

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})