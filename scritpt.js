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

// hamburger
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
});

//popap
let popup = document.querySelector('#popap');
var popap__close = document.querySelector(".popap__close");
popap__close.addEventListener("click", function() {
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.remove();
  }, 500)
});


// register siugn-in
function closeP(op, vis, bt){
  popup2.style.opacity = op;
  popup2.style.visibility = vis;
  popup2.style.bottom = bt;
}

var username = document.querySelector("#username");
var buttonText = document.querySelector(".sign-button");
var signClose = document.querySelector(".popup2__area");
var popup2 = document.getElementById('popup2')

var loginEmail = 'login@email.com';

var signInCont = document.querySelector(".signInCont");

signInCont.addEventListener("click", function() {
  if(username.value === '' && username.value !== loginEmail && !signInCont.classList.contains('active')){
    buttonText.textContent = "Register"   
    closeP(1, 'visible', 0)

  } else {
    buttonText.textContent = "Login"
  }

  if(username.value === loginEmail) {
    buttonText.textContent = "Password"
  }
  signInCont.classList.toggle("active");
});

