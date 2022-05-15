
// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // items:4,
        loop:false,
      margin:3,
      nav:true,
      autoplay:false,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      mouseDrag:true,
     
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1200:{
              items:3,
              
          }
      }
    });
  });