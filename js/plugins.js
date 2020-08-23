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


/// Number of messages in About page
document.addEventListener('DOMContentLoaded', function(event) {
  var x = screen.width;
  switch(true){
    case( x <= 768):
      var swiper = new Swiper('.ta-swiper', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,   
        autoplay: {
          delay: 3000,
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
    break;

    default:
      var swiper = new Swiper('.ta-swiper', {
        slidesPerView: 2,
        spaceBetween: 50,
        loop: true,   
        autoplay: {
          delay: 3000,
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
    break;
  }

})

window.addEventListener("resize", function(event) {
  var x = screen.width;
  switch(true){
    case( x <= 768):
      var swiper = new Swiper('.ta-swiper', {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,   
        autoplay: {
          delay: 3000,
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
    break;

    default:
      var swiper = new Swiper('.ta-swiper', {
        slidesPerView: 2,
        spaceBetween: 50,
        loop: true,   
        autoplay: {
          delay: 3000,
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
    break;
  }
  
})






//  Actinve class 
var nav = document.getElementById("nav-i"),
item = nav.children,
i,
x;

for ( x = 0; x < item.length; x = x + 1  ){
    item[x].addEventListener("click", function(){
        var current = item.classList
        for ( i = 0; i < item.length; i = i + 1 ){
            var current = item[i]
            if ( current.classList.contains("active") ){
                current.className = current.className.replace(" active", ""); 
            }
            
            
            
        }
        this.className += " active";
    });
}






