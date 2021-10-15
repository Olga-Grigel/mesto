import './index.css'; // добавьте импорт главного файла стилей
import { Card } from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { Section } from './components/Section.js';
import { UserInfo } from './components/UserInfo.js';
import {
  profileEditButton,
  profileAddButton,
  popupFormChangeProfile,
  profileNameInput,
  profileActivitiInput,
  popupFormAddElement,
  validationConfig,
  initialCards
} from './utils/constants.js'

// Активация валидации
const profileFormValidator = new FormValidator(validationConfig, popupFormChangeProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, popupFormAddElement);
cardFormValidator.enableValidation();

//функция создания карточек
const createCard = (data) => {
  const card = new Card({
    data, handleCardClick: () => {
      const popupWithImage = new PopupWithImage(data, '.popup_open_photo')
      popupWithImage.open();
      popupWithImage.setEventListeners()
    }
  },
    '.element-template');
  const cardElement = card.generateCard();
  return cardElement;

}
//Создание карточек из массива
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    section.addItem(cardElement);
  }
}, '.elements')
section.renderItems();

//Экземпляр класса PopupWithForm для попапа добавления карточек
const classFormAddElement = new PopupWithForm({
  popupSelector: '.popup_add_element',
  submitForm: (formData) => {
    // передаём экземпляру Card объект с данными формы
    const cardElement = createCard(formData);
    section.addItem(cardElement);
  }
});
classFormAddElement.setEventListeners();
//Экземпляр класса UserInfo
const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle'
});


//Экземпляр класса PopupWithForm для попапа изменения профиля
const classFormChangeProfile = new PopupWithForm({
  popupSelector: '.popup_change_profile',
  submitForm: (data) => {
    userInfo.setUserInfo(data);
  }
});
classFormChangeProfile.setEventListeners();

profileEditButton.addEventListener('click', () => {
  classFormChangeProfile.open();
  const dataUserInfo = userInfo.getUserInfo();
  profileNameInput.value = dataUserInfo.profile__title;
  profileActivitiInput.value = dataUserInfo.profile__subtitle;

});
profileAddButton.addEventListener('click', () => {
  classFormAddElement.open();
});