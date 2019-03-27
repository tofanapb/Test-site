 $(document).ready(function () {

     $('.mobile-btn i').click(function() {
         $('.menu').slideToggle(400);
     });
     
     // slide
     $(".slider").owlCarousel({

         nav: false,
         navText: ["&#10092;", "&#10093;"],
         dots: true,
         autoplay: true,
         loop: true,
         mouseDrag: true,
         touchDrag: true,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1,
             },
             
             // breakpoint from 991 up
             767: {
                 items: 1,
             },
             // breakpoint from 991 up
             991: {
                 items: 1,
             }
             
         }        
     });
     
     $(".slide-p").owlCarousel({

         nav: true,
         navText: ["&#10092;", "&#10093;"],
         dots: false,
         autoplay: true,
         loop: true,
         mouseDrag: true,
         touchDrag: true,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1,
             },
             
             // breakpoint from 991 up
             767: {
                 items: 3,
             },
             // breakpoint from 991 up
             991: {
                 items: 4,
             }
             
         }
     });
     
     
      $(".slider-t").owlCarousel({

         nav: true,
         navText: ["&#10092;", "&#10093;"],
         dots: false,
         autoplay: true,
         loop: true,
         mouseDrag: true,
         touchDrag: true,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1,
             },
             
             // breakpoint from 991 up
             767: {
                 items: 1,
             },
             // breakpoint from 991 up
             991: {
                 items: 1,
             }
             
         }
     });

     
//2nd index file slider 
     
     $(".slide-ite").owlCarousel({

         nav: true,
         navText: ["&#10092;", "&#10093;"],
         dots: false,
         autoplay: true,
         loop: true,
         mouseDrag: true,
         touchDrag: true,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1,
             },
             
             // breakpoint from 991 up
             767: {
                 items: 2,
             },
             // breakpoint from 991 up
             991: {
                 items: 3,
             }
             
         }
     });
     
     $(".sliders").owlCarousel({

         nav: false,
         navText: ["&#10092;", "&#10093;"],
         dots: true,
         autoplay: true,
         loop: true,
         mouseDrag: true,
         touchDrag: true,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1,
             },
             
             // breakpoint from 991 up
             767: {
                 items: 3,
             },
             // breakpoint from 991 up
             991: {
                 items: 4,
             }
             
         }
     });
 //3nd index file slider    
     

     $(".slider-l-data").owlCarousel({

         nav: false,
         navText: ["&#10092;", "&#10093;"],
         dots: true,
         autoplay: true,
         loop: true,
         mouseDrag: true,
         touchDrag: true,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1,
             },
             
             // breakpoint from 991 up
             767: {
                 items: 3,
             },
             // breakpoint from 991 up
             991: {
                 items: 3,
             }
             
         }
     });

     
     

 });


