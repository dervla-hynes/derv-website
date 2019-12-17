

/*Creating typing effect*/

window.onload = typeWriter;

var i = 0;
var txt = 'Dervla Hynes'; 
var speed = 150; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed-message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} 

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  let burger = document.getElementById("menu-burger");
  var x = document.getElementById("my-links");
  if (x.style.display === "block") {
    x.style.display = "none";
    burger.style.backgroundColor = "black";
  } else {
    x.style.display = "block";
    burger.style.backgroundColor = "#adbdff";
  }
}

/* const toggleMenu = () => {
  let mainNav = document.getElementById("main-nav");
  if (mainNav.classList.contains("show")) {
    mainNav.classList.remove("show");
  } else {
    mainNav.classList.add("show");
  }
}; 

add this function to nav bar and also links in menu*/


//cards animation
function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}