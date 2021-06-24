const EditButton = document.querySelector(".profile__edit-button");
const popupElement = document.querySelector('.popup')
const CloseButton = popupElement.querySelector('.popup__close')

const openPopup = function() {
  popupElement.classList.add('popup_opened')
  inputs[0].value = Name.textContent;
  inputs[1].value = Profession.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened')
  inputs[0].value = Name.textContent;
  inputs[1].value = Profession.textContent;
}

EditButton.addEventListener('click', openPopup);
CloseButton.addEventListener('click', closePopup);


const inputs = popupElement.querySelectorAll('input');
const Name = document.querySelector ('.profile__title');
const Profession = document.querySelector ('.profile__subtitle');

const SaveButton = popupElement.querySelector ('.popup__save');

function SaveButtonSave(evt){
  evt.preventDefault();
  Name.textContent = inputs[0].value;
  Profession.textContent = inputs[1].value;
  closePopup ();
}

const popupForm = popupElement.querySelector('.popup__form')

popupForm.addEventListener('submit', SaveButtonSave);


