//import './index.css'; // добавьте импорт главного файла стилей
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithSabmit } from '../components/PopupWithSabmit.js';
import {
  profileEditButton,
  profileAddButton,
  popupFormChangeProfile,
  profileNameInput,
  profileActivitiInput,
  popupFormAddElement,
  validationConfig,
  initialCards
} from '../utils/constants.js'
import { Api } from '../components/Api.js';

// Активация валидации
const profileFormValidator = new FormValidator(validationConfig, popupFormChangeProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, popupFormAddElement);
cardFormValidator.enableValidation();

//функция создания карточек
const popupWithImage = new PopupWithImage('.popup_open_photo');
popupWithImage.setEventListeners();

const createCard = (data) => {
  const card = new Card({
    data, handleCardClick: () => {
      popupWithImage.open(data);
    },

    ///этот коллбек из 9 проекта
    callbackDeleteWithSabmit:(element)=>{
      const popupWithSabmit = new PopupWithSabmit ({popupSelector: '.popup_with_sabmit'});
      popupWithSabmit.open();
      popupWithSabmit.setEventListeners(element);
    }
    //////

  },
    '.element-template');
  const cardElement = card.generateCard();
  return cardElement;

}
//Экземпляр класса Section для добавления новых карточек в разметку
const section = new Section({
  items: [],
  renderer: () => { }
}, '.elements');

//Экземпляр класса PopupWithForm для попапа добавления карточек
const classFormAddElement = new PopupWithForm({
  popupSelector: '.popup_add_element',
  submitForm: (formData) => {
    formData.likes = {};
    // передаём экземпляру Card объект с данными формы
    const cardElement = createCard(formData);
    section.addItem(cardElement);
    api.sendNewCard(formData);//Добавление новой карточки на сервер
    
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
    api.sendDataProfile(profileNameInput, profileActivitiInput);//Отправка данных профиля на сервер
    userInfo.setUserInfo(data);

  }
});
classFormChangeProfile.setEventListeners();

profileEditButton.addEventListener('click', () => {
  classFormChangeProfile.open();
  const dataUserInfo = userInfo.getUserInfo();
  profileNameInput.value = dataUserInfo.profile__title;
  profileActivitiInput.value = dataUserInfo.profile__subtitle;
  profileFormValidator.resetValidation();

});
profileAddButton.addEventListener('click', () => {
  classFormAddElement.open();
  cardFormValidator.resetValidation();
});
///////////////////////////////9 проект///////////////////////////////////////
//Инициализация класса Api (работа с сервером)
const api = new Api({
  url:"https://mesto.nomoreparties.co/v1",
  headers: {
    authorization: '991e328d-0927-45d2-8b32-8b35ae054b8c',
    'Content-Type': 'application/json'
  }
});

//Получение данных профиля с сервера
const getInitialProfile = api.getInitialProfile();
getInitialProfile
.then((result) => {
  document.querySelector('.profile__title').textContent = result.name;
  document.querySelector('.profile__subtitle').textContent = result.about;
  document.querySelector('.profile__avatar').src = result.avatar;
});

//Получение всех карточек с сервера
const getCard = api.getInitialCards();
getCard
.then((result) => {
  const dataCard = result.map((item) => ({ name: item.name, link: item.link, likes: item.likes, ownerId: item.owner._id }));
  console.log(result)
  //Создание экземпляра Section для добавления в разметку всех карточек с сервера
  const section = new Section({
    items: dataCard,
    renderer: (item) => {
      const cardElement = createCard(item);
      section.addItem(cardElement);
      if(item.ownerId!='a8915dcb2ade8a919e5a8043') {
        cardElement.querySelector('.element__trash').classList.add('element__trash_none');
      }
    }
  }, '.elements')
  section.renderItems();
});