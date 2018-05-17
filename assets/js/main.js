document.onload = document.querySelector('.hero-skew').classList.add("hero-animation");


const toggle = document.querySelector("#navToggle a");
const ul = document.querySelector('ul');
const nav = document.querySelector('nav');
const aboutText = document.querySelectorAll('.about-container-text');
const card = document.querySelectorAll('.card-container .card');
const socialContainer = document.querySelector('.social-container');

toggle.addEventListener('click', function (e) {
    e.preventDefault();

    if (document.body.clientWidth > 720) {
        ul.classList.toggle('menu-open');
    }
    else {
        nav.classList.toggle('mobile-open');
    }
});





// check to make sure that the browser can handle window.addEventListener
if (window.addEventListener) {
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65,13";

    // bind the keydown event to the Konami function
    window.addEventListener("keydown", function (e) {
        // push the keycode to the 'keys' array
        console.log(e.keyCode);
        keys.push(e.keyCode);

        // and check to see if th33333e user has entered the Konami code
        if (keys.toString().indexOf(konami) >= 0) {
            window.location = "http://www.richardmiddleton.me";
            keys = [];
        }
    }, true);
}

let about = false;
let cards = false;
let social = false;

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 180 && !about) {
        console.log('yell');
        aboutText[0].classList.toggle('about-animation');
        about = true;
    }


if(window.pageYOffset > 1180 && !cards) {

    var i = 0;
    
    function myLoop () {
       setTimeout(function () {
          card[i].classList.add("card-animation");
          i++;
          if (i < card.length) {myLoop()} 
       }, 250)
    }
    
    myLoop();
    cards = true;
    }

if(window.pageYOffset > 2080 && !social) {
    console.log('social');
    socialContainer.classList.toggle('social-animation');
    social = true;
    }
});
