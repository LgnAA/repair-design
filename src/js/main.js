// console.log('Привет от JavaScript!');
// document.addEventListener("DOMContentLoaded", (event) => {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const removeModal = () => modal.classList.remove("modal--visible")
//   // const closeBtn = document.querySelectorAll('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
//   closeBtn.addEventListener('click', switchModal);
//   document.addEventListener('keydown', (event) => {
//     if (event.code === "Escape") removeModal();
//   }); 
//   document.addEventListener('click', (event) => {
//     if (event.target === modal) removeModal();
//   });
// });  
// Нативный JS закончен
// открытие изакрытие модального окна
$(document).ready(function () {
  var modal = $('.modal');
  var modalBtn = $('[data-toggle=modal]');
  var closeBtn = $('.modal__close');
  var removeModal = () => modal.classList.remove("modal--visible");
  modalBtn.on('click', function (){
    modal.toggleClass('modal--visible') 
  });
  closeBtn.on('click', function (){
    modal.toggleClass('modal--visible')
  });
  // закрытие на клавишу Escape
  $(document).keydown(function(e) {
    var code = e.keyCode || e.which;
    if (code == 27) $('.modal').removeClass('modal--visible');
  });
  // закрытие модального окна при нажатие на любое место вне его
  $(document).on('click', function (e) {
    if (modal.is(e.target)) {
      modal.removeClass('modal--visible');
    };
  });
  // появление кнопки наверх , если спустились вниз на 1400px
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1400) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  // плавная прокрутка 
  $('#up').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  $('.hero__scroll-down').on('click', function(){
    console.log('ты нажал кнопку вниз');
    var el = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(this).offset().top - $(".hero").height()}, 2000);
    return false;
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
// размеры и отступы стрелочек сладера
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination-horizontal.swiper-pagination-bullets');
  bullets.css('left', prev.width() + 10)
  next.css('left', prev.width() + 10 + bullets.width()+10)

  new WOW().init();
  // валидация форм
  function validateForm(form){
    $(form).validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 17
        },
        userQuestion: "required",
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Слишком короткое имя",
          maxlength: "Имя не должно превышать 15 символов"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Некорректно введен номер"
        },
        userQuestion: "Заполните поле",
        userEmail: {
          required: "Заполните поле",
          email: "Введите Ваш email в формате name@domain.com"
        }
      },
      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function(){
           $(form)[0].reset();
            // $(form).find('input').val("");
            // modalAnswer.toggleClass('modal-answer_visible');
            // modal.removeClass('modal_visible');
            // $('.modal-answer__title').text('Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут.');
            // $(form).text('Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут.');
            $(form).html('<p class="modal-answer__text">Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут. <br><br>Чтобы узнавать новости первыми, подпишитесь на нашу группу в ВК <br><a class="modal-answer__link" href="https://vk.com/frontend_katrina" target="_blank">Подписаться <img src="./img/vk-icon.svg" alt="vk"></a></p>');
          },
          error: function(jqXHR, textStatus) {
            console.error(jqXHR + " " + textStatus);
          }
        });
      }
    });
  }
  validateForm('.modal__form');
  validateForm('.control__form');
  validateForm('.footer__form');
  
    // маска для телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});


