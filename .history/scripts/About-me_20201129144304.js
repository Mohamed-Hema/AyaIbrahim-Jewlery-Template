//On Scroll Animation
AOS.init({
  duration: 1200,
})
// Loading Screen
let loading = document.querySelector('.loading');
let body = document.getElementsByTagName('body')[0];
body.style.overflowY = "hidden";
window.addEventListener('load', function () {
  loading.style.display ='none';
  body.style.overflowY = "scroll";
});
// Global
const navBar = document.querySelector('.navbar');

window.onscroll = function () {
  let top = window.scrollY;
  if(top >= 300) {
    navBar.classList.add('active');
  } else {
    navBar.classList.remove('active');
  }
}