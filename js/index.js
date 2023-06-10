const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        576: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});