// sliders
new Swiper('.image-slider', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    autoHeight: true,
  });

// register siugn-in
var signInCont = document.querySelector(".signInCont");
  signInCont.addEventListener("click", function() {
    signInCont.classList.toggle("active");
});

// hamburger
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
});

let popup = document.querySelector('#popap');
//popap
var popap__close = document.querySelector(".popap__close");
popap__close.addEventListener("click", function() {
  
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.remove();
  }, 500)
});


