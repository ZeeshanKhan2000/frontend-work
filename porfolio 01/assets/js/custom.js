
AOS.init();


$('.banner-slider').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




$('.discover-slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },

        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



$('.new-arrival-slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})



$('[data-tab]').on('click', function(e) {
    $(this).addClass('active').siblings('[data-tab]').removeClass('active')
    /* $(this).siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
    e.preventDefault() */

    $(this).closest('.Start-exploring-tabing').find('[data-content]').removeClass('active')
    $(this).closest('.Start-exploring-tabing').find('[data-content=' + $(this).data('tab') + ']').addClass('active')

    /* $(this).addClass('active').siblings('[data-tab]').removeClass('active').siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active') */
})


// $('.Latest-News-content-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         },
//         1400:{
//             items:1
//         }
//     }
// })