// Initialization of header banner-slider
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed: 600,


});

const swiper_price = new Swiper('.swiper-price', {
    direction: 'horizontal',
    loop: false,
    autoplay: false,
    navigation: {
        nextEl: '.swiper-pagination-next',
        prevEl: 'swiper-pagination-prev',
    },
    
});

