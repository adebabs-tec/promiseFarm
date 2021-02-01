var sideNav = document.getElementById("sideNav");
var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");

sideNav.style.right = "-250px";
function menuBtnClose() {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.className = "fas fa-times";
  } else {
    sideNav.style.right = "-250px";
    menu.className = "fas fa-bars";
  }
}
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
