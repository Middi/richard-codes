// START SKEW ANIMATION
document.querySelector('.hero-skew').classList.add("hero-animation");


const toggle = document.querySelector("#navToggle");
const ul = document.querySelector('ul');
const nav = document.querySelector('nav');
const aboutText = document.querySelectorAll('.about-container-text');
const card = document.querySelectorAll('.card-container .card');
const socialContainer = document.querySelector('.social-container');
const liList = document.querySelectorAll('nav ul li');


// MOBILE TOGGLE
toggle.addEventListener('click', function (e) {
    e.preventDefault();

    if (document.body.clientWidth > 720) {
        ul.classList.toggle('menu-open');
        document.querySelector('#navToggle').classList.toggle('open');
    }
    else {
        nav.classList.toggle('mobile-open');
        document.querySelector('#navToggle').classList.toggle('open');
    }
});


// KONAMI CODE
if (window.addEventListener) {
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65,13";
    window.addEventListener("keydown", function (e) {
        keys.push(e.keyCode);
        if (keys.toString().indexOf(konami) >= 0) {
            window.location = "http://www.richardmiddleton.me";
            keys = [];
        }
    }, true);
}


// ANIMATION ON SCROLL
let about = false;
let cards = false;
let social = false;

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 180 && !about) {
        aboutText[0].classList.toggle('about-animation');
        about = true;
    }

    if (window.pageYOffset > 1180 && !cards) {
        var i = 0;
        function myLoop() {
            setTimeout(function () {
                card[i].classList.add("card-animation");
                i++;
                if (i < card.length) {
                    myLoop()
                }
            }, 250)
        }
        myLoop();
        cards = true;
    }

    if (window.pageYOffset > 2080 && !social) {
        socialContainer.classList.toggle('social-animation');
        social = true;
    }


    // ACTIVE LINKS
    function removeLi() {
        for (var i = 0; i < liList.length; i++) {
            liList[i].firstElementChild.classList.remove('nav-active')
        }
    }

    if (window.pageYOffset < 623) {
        removeLi();
        liList[0].firstElementChild.classList.add("nav-active");
    }
    else if (window.pageYOffset > 623 && window.pageYOffset < 1400) {
        removeLi();
        liList[1].firstElementChild.classList.add("nav-active");
    }
    else if (window.pageYOffset > 1400 && window.pageYOffset < 2535) {
        removeLi();
        liList[2].firstElementChild.classList.add("nav-active");
    }
    else {
        removeLi();
        liList[3].firstElementChild.classList.add("nav-active");
    }
});




// Smooth scrolling
initSmoothScrolling();

function initSmoothScrolling() {
    if (isCssSmoothSCrollSupported()) {
        document.getElementById('css-support-msg').className = 'supported';
        return;
    }

    var duration = 400;

    var pageUrl = location.hash ?
        stripHash(location.href) :
        location.href;

    delegatedLinkHijacking();

    function delegatedLinkHijacking() {
        document.body.addEventListener('click', onClick, false);

        function onClick(e) {
            if (!isInPageLink(e.target))
                return;

            e.stopPropagation();
            e.preventDefault();

            jump(e.target.hash, {
                duration: duration,
                callback: function () {
                    setFocus(e.target.hash);
                }
            });
            if (document.body.clientWidth < 720) {
                nav.classList.toggle('mobile-open');
                document.querySelector('#navToggle').classList.toggle('open');
            }
        }
    }

    function directLinkHijacking() {
        [].slice.call(document.querySelectorAll('a'))
            .filter(isInPageLink)
            .forEach(function (a) {
                a.addEventListener('click', onClick, false);
            });

        function onClick(e) {
            e.stopPropagation();
            e.preventDefault();

            jump(e.target.hash, {
                duration: duration,
            });
        }

    }

    function isInPageLink(n) {
        return n.tagName.toLowerCase() === 'a' &&
            n.hash.length > 0 &&
            stripHash(n.href) === pageUrl;
    }

    function stripHash(url) {
        return url.slice(0, url.lastIndexOf('#'));
    }

    function isCssSmoothSCrollSupported() {
        return 'scrollBehavior' in document.documentElement.style;
    }

    function setFocus(hash) {
        var element = document.getElementById(hash.substring(1));

        if (element) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                element.tabIndex = -1;
            }

            element.focus();
        }
    }

}

function jump(target, options) {
    var
        start = window.pageYOffset,
        opt = {
            duration: options.duration,
            offset: options.offset || 0,
            callback: options.callback,
            easing: options.easing || easeInOutQuad
        },
        distance = typeof target === 'string' ?
            opt.offset + document.querySelector(target).getBoundingClientRect().top :
            target,
        duration = typeof opt.duration === 'function' ?
            opt.duration(distance) :
            opt.duration,
        timeStart, timeElapsed;

    requestAnimationFrame(function (time) {
        timeStart = time;
        loop(time);
    });

    function loop(time) {
        timeElapsed = time - timeStart;

        window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

        if (timeElapsed < duration)
            requestAnimationFrame(loop)
        else
            end();
    }

    function end() {
        window.scrollTo(0, start + distance);

        if (typeof opt.callback === 'function')
            opt.callback();
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
    }

}

