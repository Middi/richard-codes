document.onload = setTimeout(function(){ document.querySelector('.hero-skew').classList.add("hero-animation"); }, 200);


    
$(document).ready(function() {
  
    $("#navToggle a").click(function(e) {
      e.preventDefault();
      $("nav").slideToggle("medium");
    });
  
    $(window).resize(function() {
        $("nav").css("display", "none");
    });
  
  });
  
  
  