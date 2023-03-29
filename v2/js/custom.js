// ///////////////*****//////////////////
// // RESPONSIVE NAVIGATION
// // OPEN BTN
//   $(document).ready(function () {
//     $("#navbar").on("click", function() {
//       $(".nveMenu").addClass("is-opened");
//       $(".overlay").addClass("is-on");
//     });

//     $(".overlay").on("click", function() {
//       $(this).removeClass("is-on");
//       $(".nveMenu").removeClass("is-opened");
//     });
//   });
// // CLOSE BTN
//   $(".overlay").on("click", function() {
//     $(this).removeClass("is-on");
//     $(".nveMenu").removeClass("is-opened");
//   });

//   $(".close-btn-nav").click(function(){
//   $(".nveMenu").removeClass("is-opened");
//   $(".overlay").removeClass("is-on");
//   });
//   // RESPONSIVE NAVIGATION
//   // 




// product slider 
$('.product-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 4
        },
        1300: {
            items: 4
        },
        1600: {
            items: 5
        }
    }
})


var selector = $('.product-slider.owl-carousel');

$('.next-button').click(function () {
    selector.trigger('prev.owl.carousel');
});

$('.prev-button').click(function () {
    selector.trigger('next.owl.carousel');
});

// product slider close 















// testmonial slider  start
$('.testmonial-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 1000,
    center: true,    
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
// testmonial slider  close











// fancybox config
// Start
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});
// Close






// banner slider 

$('.banner-slider').owlCarousel({
    loop: true,
    smartSpeed: 1000,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})








// header javascript 
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


















// start Plus Minus input IN product detail

$(document).ready(function () {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// End Plus Minus input IN product detail





const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })


})






