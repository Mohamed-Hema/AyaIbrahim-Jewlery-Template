//On Scroll Animation
AOS.init({
  duration: 1200,
})
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