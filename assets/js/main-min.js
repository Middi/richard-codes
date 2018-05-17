"use strict";function initSmoothScrolling(){function t(){function t(t){n(t.target)&&(t.stopPropagation(),t.preventDefault(),jump(t.target.hash,{duration:c,callback:function e(){a(t.target.hash)}}),document.body.clientWidth<720&&(nav.classList.toggle("mobile-open"),document.querySelector("#navToggle").classList.toggle("open")))}document.body.addEventListener("click",t,!1)}function e(){function t(t){t.stopPropagation(),t.preventDefault(),jump(t.target.hash,{duration:c})}[].slice.call(document.querySelectorAll("a")).filter(n).forEach(function(e){e.addEventListener("click",t,!1)})}function n(t){return"a"===t.tagName.toLowerCase()&&t.hash.length>0&&o(t.href)===l}function o(t){return t.slice(0,t.lastIndexOf("#"))}function i(){return"scrollBehavior"in document.documentElement.style}function a(t){var e=document.getElementById(t.substring(1));e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())}if(i())return void(document.getElementById("css-support-msg").className="supported");var c=400,l=location.hash?o(location.href):location.href;t()}function jump(t,e){function n(t){u=t-r,window.scrollTo(0,c.easing(u,a,l,s)),u<s?requestAnimationFrame(n):o()}function o(){window.scrollTo(0,a+l),"function"==typeof c.callback&&c.callback()}function i(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)}var a=window.pageYOffset,c={duration:e.duration,offset:e.offset||0,callback:e.callback,easing:e.easing||i},l="string"==typeof t?c.offset+document.querySelector(t).getBoundingClientRect().top:t,s="function"==typeof c.duration?c.duration(l):c.duration,r,u;requestAnimationFrame(function(t){r=t,n(t)})}document.querySelector(".hero-skew").classList.add("hero-animation");var toggle=document.querySelector("#navToggle"),ul=document.querySelector("ul"),nav=document.querySelector("nav"),aboutText=document.querySelectorAll(".about-container-text"),card=document.querySelectorAll(".card-container .card"),socialContainer=document.querySelector(".social-container"),liList=document.querySelectorAll("nav ul li");if(toggle.addEventListener("click",function(t){t.preventDefault(),document.body.clientWidth>720?(ul.classList.toggle("menu-open"),document.querySelector("#navToggle").classList.toggle("open")):(nav.classList.toggle("mobile-open"),document.querySelector("#navToggle").classList.toggle("open"))}),window.addEventListener){var keys=[],konami="38,38,40,40,37,39,37,39,66,65,13";window.addEventListener("keydown",function(t){keys.push(t.keyCode),keys.toString().indexOf(konami)>=0&&(window.location="http://www.richardmiddleton.me",keys=[])},!0)}var about=!1,cards=!1,social=!1;window.addEventListener("scroll",function(){function t(){for(var t=0;t<liList.length;t++)liList[t].firstElementChild.classList.remove("nav-active")}if(window.pageYOffset>180&&!about&&(aboutText[0].classList.toggle("about-animation"),about=!0),window.pageYOffset>1180&&!cards){var e=function t(){setTimeout(function(){card[n].classList.add("card-animation"),++n<card.length&&t()},250)},n=0;e(),cards=!0}window.pageYOffset>2080&&!social&&(socialContainer.classList.toggle("social-animation"),social=!0),window.pageYOffset<623?(t(),liList[0].firstElementChild.classList.add("nav-active")):window.pageYOffset>623&&window.pageYOffset<1400?(t(),liList[1].firstElementChild.classList.add("nav-active")):window.pageYOffset>1400&&window.pageYOffset<2535?(t(),liList[2].firstElementChild.classList.add("nav-active")):(t(),liList[3].firstElementChild.classList.add("nav-active"))}),initSmoothScrolling();