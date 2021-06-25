const ProfileEditButton = document.querySelector(".profile__edit-button");
const Popup = document.querySelector('.popup')
const PopupClose = Popup.querySelector('.popup__close')

const openPopup = function() {
  Popup.classList.add('popup_opened')
  Input[0].value = ProfileTitle.textContent;
  Input[1].value = ProfileSubtitle.textContent;
}

const closePopup = function() {
  Popup.classList.remove('popup_opened')
  Input[0].value = '';
  Input[1].value = '';
}

ProfileEditButton.addEventListener('click', openPopup);
PopupClose.addEventListener('click', closePopup);


const Input = Popup.querySelectorAll('input');
const ProfileTitle = document.querySelector ('.profile__title');
const ProfileSubtitle = document.querySelector ('.profile__subtitle');

const SaveButton = Popup.querySelector ('.popup__save');

function Save(evt){
  evt.preventDefault();
  ProfileTitle.textContent = Input[0].value;
  ProfileSubtitle.textContent = Input[1].value;
  closePopup ();
}

const popupForm = Popup.querySelector('.popup__form')

popupForm.addEventListener('submit', Save);


