(function($) {
  'use strict';

  $(document).ready(function(){

    // head room for header
    $(".main-header").headroom({
      tolerance: {
        down : 10, up : 20
      },
      offset : 81
    });

    // form search
    $(".xh-btn-search").click(function(){
      $(".main-header .xh-form-search input").fadeToggle("fast");
    });

    // main slide
    $(".xh-list-slide").slick({
      // arrows: false,
      asNavFor: '.xh-nav-slide',
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 700,
      fade: true
    });

    $(".xh-nav-slide").slick({
      slidesToShow: 3,
      arrows: false,
      centerMode: true,
      centerPadding: 0,
      speed: 700,
      asNavFor: '.xh-list-slide',
    });

    // instagram
    $(".xh-instagram .xh-list-img").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
    });

    // post slider
    $(".xh-list-post-slide").slick({
      prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>'
    });

    // relate post
    $(".xh-related-post").slick({
      slidesToShow: 1,
      centerMode: true,
      centerPadding:'70px',
      prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>'
    });

    // scroll top
    $(".xh-scroll-top").click(function(){
      $("html,body").animate({
        scrollTop: 0
      },500);
    });


  });

})(jQuery); // end JQuery namespace
