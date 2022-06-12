'use strict';


// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});

//Join telegram
function url(){
  window.open("https://telegram.me/s/commclassroom" , '_blank');

}
function apnikaksha(){
  window.open("https://telegram.me/s/apnikakshaofficial" , '_blank');

}

function contact(){
  document.getElementById("cnct").innerHTML= '@khalidhasanx3@gmail.com'
  
}