// Знаходимо елементи
const scrollContainer = document.querySelector('.head__wrap');
const leftButton = document.querySelector('.head__btn.left');
const rightButton = document.querySelector('.head__btn.right');
const leftBtn = document.querySelector('.head__bt.left');
const rightBt = document.querySelector('.head__bt.right');
const rightB = document.querySelector('.head__b.left');
const rightBs = document.querySelector('.head__b.right');

// Додаємо обробник для кнопки "Вліво"
leftButton.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -360, behavior: 'smooth' });
});

// Додаємо обробник для кнопки "Вправо"
rightButton.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: 360, behavior: 'smooth' });
});


leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -360, behavior: 'smooth' });
  });

rightBt.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 360, behavior: 'smooth' });
  });
  

rightB.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -360, behavior: 'smooth' });
  });

  rightBs.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 360, behavior: 'smooth' });
  });
  
  




  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-header-open]"),
      closeModalBtn: document.querySelector("[data-modal-header-close]"),
      modal: document.querySelector("[data-header-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();