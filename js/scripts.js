// SLIDER

const sliderTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slider-item');
const buttonPrevious = document.querySelector('.previous-slide');
const buttonNext = document.querySelector('.next-slide');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.current-slide').classList.remove('current-slide');
  document.querySelector('.slider-pagination-button-current').classList.remove('slider-pagination-button-current');
};

sliderTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('current-slide');
    tab.classList.add('slider-pagination-button-current');
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('current-slide');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('current-slide');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
});

// MODAL-WINDOW

const feedback = document.querySelector('.feedback-form-link');
const feedbackModal = document.querySelector('.modal-container');
const modalClose = feedbackModal.querySelector('.modal-close-button');

feedback.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackModal.classList.add('modal-show');
});

modalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackModal.classList.remove('modal-show');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (feedbackModal.classList.contains('modal-show')) {
      evt.preventDefault();
      feedbackModal.classList.remove('modal-show');
    }
  }
});
