var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      speed: 0,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});