console.log('Привет от JavaScript!');
document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const removeModal = () => modal.classList.remove("modal--visible")
  // const closeBtn = document.querySelectorAll('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
  document.addEventListener('keydown', (event) => {
    if (event.code === "Escape") removeModal();
  }); 
  document.addEventListener('click', (event) => {
    if (event.target === modal) removeModal();
  });
});
