'use strict'
/*
 Understanding the problem
 What i am to doing? 
 --> creat a modal window for 3 buttons 

 Where will the modal window be? 
 --> Center of the web page
 How will close modal window? 
 --> 1st click on the close button 
 --> 2nd click on the outside of modal window
 --> 3rd press on the escape key

 Breaking into the sub problem
  defined all elements 
  diclare a loop to add multiple event handler
*/


const modalBtn = document.querySelectorAll('.show-modal'),
  hidden = document.querySelector('.hidden'),
  closeModal = document.querySelector('.close-modal'),
  modal = document.querySelector('.modal'),
  overLay = document.querySelector('.overlay'),
  container = document.querySelector('.container');
const hiddenArr = [modal, overLay];

const modalOpen = () => {
  for (let y = 0; y < hiddenArr.length; y++)
    hiddenArr[y].classList.remove('hidden');
}
const modalClose = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
}
for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener('click', modalOpen);
}
overLay.addEventListener('click', modalClose);
closeModal.addEventListener('click', modalClose);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) modalClose();
});