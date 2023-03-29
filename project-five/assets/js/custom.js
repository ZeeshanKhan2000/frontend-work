// $(".banner-div").owlCarousel({
//   loop: true,
//   margin: 0,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

// $(".product-slider").owlCarousel({
//   loop: true,
//   margin: 60,
//   nav: true,
//   responsive: {
//     0: {
//       items: 4,
//     },
//     600: {
//       items: 4,
//     },
//     1000: {
//       items: 4,
//     },
//   },
// });
$(".banner-sliders  ").owlCarousel({
  loop: true,
  margin: 60,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});



// *****************************product detail ****************

$('.product-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('.what-people-say-slider ').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



$('.collapse').collapse()


$('#myCollapsible').collapse({
  toggle: false
})

$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})