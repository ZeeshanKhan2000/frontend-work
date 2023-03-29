// Animations call 

// AOS.init({
//     duration: 1200,
//     once: true,
// })

// new WOW().init();


// end Animation 






// counter start at six-wrap class 
// JS 

// $(window).on('scroll', function () {
//     if ($(window).scrollTop() >= $('.six-wrap').offset().top + $('.six-wrap').outerHeight() - window.innerHeight){
//         counterrr();
//     }
// });


// function counterrr() {
//     $('.counter').each(function () {
//         $(this).prop('Counter', 0).animate({
//             Counter: $(this).text()
//         }, {
//             duration: 3000,
//             easing: 'swing',
//             step: function (now) {
//                 $(this).text(Math.ceil(now));
//             }
//         });
//     });
//     $('.counter1').removeClass('counter');
// }

// close 











// scroll behavior 
// window.scroll({
//     behavior: 'smooth'
// });




// collapse hide on complete body click expert header-menulink-main 

// $(document).on('click', function (event) {
//     if (!$(event.target).closest('.header-menulinks-main').length) {
//         $('.collapse').collapse('hide');
//     }
// });


// inner click closing in  industry-inner class 

// $(".industry-inner").click(function () {
//     $('.collapse').collapse('hide');
// });





$('[data-tab]').on('click', function(e) {
    $(this).addClass('active').siblings('[data-tab]').removeClass('active')
    /* $(this).siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
    e.preventDefault() */

    $(this).closest('.zeehsan').find('[data-content]').removeClass('active')
    $(this).closest('.zeehsan').find('[data-content=' + $(this).data('tab') + ']').addClass('active')

    /* $(this).addClass('active').siblings('[data-tab]').removeClass('active').siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active') */
})


$('[data-tab]').on('click', function(e) {
    $(this).addClass('active').siblings('[data-tab]').removeClass('active')
    /* $(this).siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
    e.preventDefault() */

    $(this).closest('.zeehsan-afzal').find('[data-content]').removeClass('active')
    $(this).closest('.zeehsan-afzal').find('[data-content=' + $(this).data('tab') + ']').addClass('active')

    /* $(this).addClass('active').siblings('[data-tab]').removeClass('active').siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active') */
})
