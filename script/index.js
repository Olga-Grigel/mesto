import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const profileEditButton = document.querySelector(".profile__edit-button");
const popupChangeProfile = document.querySelector('.popup_change_profile');
const popupCloseChangeProfile = popupChangeProfile.querySelector('.popup__close_change_profile');
const popupFormChangeProfile = popupChangeProfile.querySelector('.popup__form_change_profile');
const profileTitle = document.querySelector ('.profile__title');
const profileSubtitle = document.querySelector ('.profile__subtitle');
const profileNameInput = popupFormChangeProfile.elements.name;
const profileActivitiInput = popupFormChangeProfile.elements.activiti;
const elementss = document.querySelector('.elements');
const popupAddElement = document.querySelector('.popup_add_element');
const popupFormAddElement = popupAddElement.querySelector('.popup__form_add_element');
const popupOpenPhoto = document.querySelector('.popup_open_photo');
const elementTitleInput = popupFormAddElement.elements.title;
const elementLinkInput = popupFormAddElement.elements.link;
const popupTextOpenPhoto = popupOpenPhoto.querySelector('.popup__text_open_photo');
const popupPhotoOpenPhoto = popupOpenPhoto.querySelector('.popup__photo_open_photo');

  //Объект с селекторами для настройки валидации форм
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error_active'
};
  // Массив карточек
const initialCards = [
  {
    name: 'Маяк',
    link: 'https://images.unsplash.com/photo-1502088026787-2532dc33d2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Аораки',
    link: 'https://images.unsplash.com/photo-1589023498616-dbf5d0122fc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Горы',
    link: 'https://images.unsplash.com/photo-1568362711661-ffb64f7500ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Милфорд-Саунд',
    link: 'https://images.unsplash.com/photo-1578127033857-8b1450a3b0ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Новая Зеландия',
    link: 'https://images.unsplash.com/photo-1561046002-ced99fe6770c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Квинстаун',
    link: 'https://images.unsplash.com/photo-1592275142354-0d765e9a9c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];
// Активация валидации
const profileFormValidator = new FormValidator(validationConfig, popupFormChangeProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, popupFormAddElement);
cardFormValidator.enableValidation(); 

// Функция закрытия попапа клавишей ESC
const closePopupClickEsc = (event)=>{
  if (event.key === 'Escape'){
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
    }
};
// Функция открытия попапа
export function openPopup(elementPopup) {
  elementPopup.classList.add('popup_opened');
  document.addEventListener('keyup',closePopupClickEsc);
};
// Функция закрытия попапа
export function closePopup(elementPopup) {
  elementPopup.classList.remove('popup_opened');
  document.removeEventListener('keyup',closePopupClickEsc);
}

const openPopupProfile = function(){
  openPopup(popupChangeProfile);
  profileNameInput.value = profileTitle.textContent;
  profileActivitiInput.value = profileSubtitle.textContent;
  profileFormValidator.cleaningPopup();//очистка формы при открытии
}

profileEditButton.addEventListener('click', openPopupProfile);
popupCloseChangeProfile.addEventListener('click', ()=>{
  closePopup(popupChangeProfile);
});

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileSubtitle.textContent = profileActivitiInput.value;
  closePopup(popupChangeProfile);
}

popupFormChangeProfile.addEventListener('submit', handleProfileFormSubmit);
//функция создания карточек
const createCard = (data)=> {
  const card = new Card (data, '.element-template');
  const cardElement = card.generateCard();
  return cardElement;
}
  
//Создание карточек из массива
initialCards.forEach((item)=> {
  elementss.prepend(createCard(item));// Добавляем в DOM
});

//Обработчик новой карточки

popupFormAddElement.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  const newCadsArray = {
    name: elementTitleInput.value,
    link: elementLinkInput.value
  };
  
  elementss.prepend(createCard(newCadsArray));
  popupFormAddElement.reset();
  closePopup(popupAddElement);
});

// Функция открытия попапа карточек (фото)
const handleOpenPopup = (evt)=> {
  popupTextOpenPhoto.textContent = evt.target.closest('.element').querySelector('.element__text-block').textContent;
  popupPhotoOpenPhoto.setAttribute('src', evt.target.getAttribute('src'));
  openPopup(popupOpenPhoto);
}

const setEventListeners = ()=> {
  const profileAddButton = document.querySelector('.profile__add-button');
  const popupCloseAddElement = document.querySelector('.popup__close_add_element');
  const popupAddElement = document.querySelector('.popup_add_element');
  const popupFormAddElement = popupAddElement.querySelector('.popup__form_add_element');
  const popupOpenPhoto = document.querySelector('.popup_open_photo');
  const popupCloseOpenPhoto = document.querySelector('.popup__close_open_photo');
    
  profileAddButton.addEventListener('click', ()=>{
  openPopup(popupAddElement);
  cardFormValidator.cleaningPopup();
  });

  popupCloseAddElement.addEventListener('click', ()=>{
  closePopup(popupAddElement);
  popupFormAddElement.reset();
  });

  elementss.addEventListener('click', handleOpenPopup);

  popupCloseOpenPhoto.addEventListener('click', ()=>{
    closePopup(popupOpenPhoto);
    })
}
setEventListeners();

//Закрытие попапoв по клику на оверлей
const closePopupClickOverlay = (elementPopup)=>{
  elementPopup.addEventListener('mousedown', (event)=>{
    if (event.target !== event.currentTarget) {
      return;
    } else{
      closePopup(elementPopup);
    }
  });
};

closePopupClickOverlay(popupChangeProfile);
closePopupClickOverlay(popupAddElement);
closePopupClickOverlay(popupOpenPhoto);