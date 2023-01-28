// ========== Box icon url ============//

ScrollReveal({
    reset: true,
    distance: '60px' ,
    duration: 2500,
    delay: 300
});

ScrollReveal().reveal('.about-text', {delay: 400, origin: 'right'});
ScrollReveal().reveal('.about-img', {delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.about-text', {delay: 500, origin: 'let'});
ScrollReveal().reveal('.about-text', {delay: 500, origin: 'let'});





// =============== Swiper JS code ============//
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
