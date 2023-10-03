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
});