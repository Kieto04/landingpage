// content_04 carousel
$('.carousel_content_04').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    nav:false,
    items:1,
    lazyLoad: true,
    nav:true,
  responsive:{
        0:{
            items:1,
            stagePadding: 70
        },
        376:{
            items:1,
            stagePadding: 95
        },
        600:{
            items:1,
            stagePadding: 100
        },
    }
})
// content_05 carousel
$(".carousel_content_05").owlCarousel({
  margin:10,
  loop:true,
  autoplay:true,
  nav:true,
// navText: ["<img src='img/prev_icon.svg'>","<img src='img/next_icon.svg'>"],
  responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            merge:true,
                                
        },
        1200:{
            items:3
        }
  }
});