let loading = document.querySelector('.loading');
let body = document.getElementsByTagName('body')[0];
const navBar = document.querySelector('.navbar');
const inputs = document.querySelectorAll(".input");

//On Scroll Animation
AOS.init({
  duration: 1200,
})

// Global consts
window.onscroll = function () {
  let top = window.scrollY;
  if(top >= 300) {
    navBar.classList.add('active');
  } else {
    navBar.classList.remove('active');
  }
}




function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


//Start jQuery
$(document).ready(function(){
    $('.image-popup').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery:{
            enabled:true
        }   
    });
});


