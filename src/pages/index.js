import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit.js';
import {
  profileEditButton,
  profileAddButton,
  popupFormChangeProfile,
  popupFormChangeAvatar,
  profileNameInput,
  profileActivitiInput,
  popupFormAddElement,
  validationConfig
} from '../utils/constants.js'
import { Api } from '../components/Api.js';

// Активация валидации
const profileFormValidator = new FormValidator(validationConfig, popupFormChangeProfile);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(validationConfig, popupFormAddElement);
cardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationConfig, popupFormChangeAvatar);
avatarFormValidator.enableValidation();

const popupWithImage = new PopupWithImage('.popup_open_photo');
popupWithImage.setEventListeners();

const popupWithSabmit = new PopupWithSubmit({
  popupSelector: '.popup_with_sabmit'
});
popupWithSabmit.setEventListeners();

//экземпляр класса Section для добавления карточек в разметку
let cardSection = new Section({
  items: [],
  renderer: (item) => {
    const cardElement = createCard(item);
    cardSection.addItem(cardElement);
  }
}, '.elements')

//Экземпляр класса Card
const createCard = (data) => {
  const card = new Card({
    data,

    handleCardClick: () => {
      popupWithImage.open({ text: data.name, link: data.link });
    },

    handleDeleteIconClick: () => {
      popupWithSabmit.open();
      popupWithSabmit.setSubmitAction(() => {
        api.deleteCards(data.id)
          .then(() => {
            card.removeCard();
            popupWithSabmit.close();
          })
          .catch(err => alert(err))
      });
    },

    likeCard() {
      api.changeLikeCardStatus(data.id, card.isLiked(), data.likes)
        .then((res) => {
          card.toggleLikeState(res);
        })
        .catch((err) => {
          alert(err);
        });
    }
  },
    '.element-template', userId);
  const cardElement = card.generateCard();
  return cardElement;
}

//Инициализация класса Api (работа с сервером)
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1",
  headers: {
    authorization: '991e328d-0927-45d2-8b32-8b35ae054b8c',
    'Content-Type': 'application/json'
  }
});

//удаление карточки после подтверждения
popupWithSabmit.setEventListeners();

let userId = null

Promise.all([ //в Promise.all передаем массив промисов которые нужно выполнить
  api.getInitialProfile(),
  api.getInitialCards()
])
  .then((values) => {
    //получение данных профиля
    userInfo.setUserInfo(values[0].name, values[0].about);
    userInfo.setUserAvatar(values[0].avatar);
    userId = values[0]._id;

    //получение всех карточек
    const dataCard = values[1].map((item) => ({ name: item.name, link: item.link, likes: item.likes, likesId: item.likes.map((item) => ({ likesid: item._id })), ownerId: item.owner._id, id: item._id }));
    //Создание экземпляра Section для добавления в разметку всех карточек с сервера
    cardSection.renderItems(dataCard)
  })
  .catch((err) => { alert(err); })

//Экземпляр класса PopupWithForm для попапа добавления карточек
const popupAddElement = new PopupWithForm({
  popupSelector: '.popup_add_element',
  submitForm: (formData) => {
    //Добавление новой карточки на сервер
    popupAddElement.updateButtonState('Сохранение...')
    api.sendNewCard(formData)
      .then((data) => {
        // передаём экземпляру методу создания карточки с помощью класса Card данные
        const cardElement = createCard({ name: data.name, link: data.link, likes: data.likes, ownerId: data.owner._id });
        cardSection.addItem(cardElement);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        popupAddElement.updateButtonState('Создать')
      })
  }
});
popupAddElement.setEventListeners();

//Экземпляр класса UserInfo
const userInfo = new UserInfo({
  titleSelector: '.profile__title',
  subtitleSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
});

profileEditButton.addEventListener('click', () => {
  popupChangeProfile.open();
  const dataUserInfo = userInfo.getUserInfo();
  profileNameInput.value = dataUserInfo.profile__title;
  profileActivitiInput.value = dataUserInfo.profile__subtitle;
  profileFormValidator.resetValidation();

});
profileAddButton.addEventListener('click', () => {
  popupAddElement.open();
  cardFormValidator.resetValidation();
});

//Экземпляр класса PopupWithForm для попапа изменения профиля
const popupChangeProfile = new PopupWithForm({
  popupSelector: '.popup_change_profile',
  submitForm: (data) => {
    popupChangeProfile.updateButtonState('Сохранение...')
    //Отправка данных профиля на сервер
    api.sendDataProfile({ name: profileNameInput.value, activity: profileActivitiInput.value })
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about);
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => {
        popupChangeProfile.updateButtonState('Сохранить')
      })
  }
});

popupChangeProfile.setEventListeners();

//Экземпляр класса PopupWithForm для попапа изменения профиля
document.querySelector('.profile__ikon').addEventListener('click', () => {
  popupChangeAvatar.open();
  avatarFormValidator.resetValidation()
})

const popupChangeAvatar = new PopupWithForm({
  popupSelector: '.popup_change_avatar',
  submitForm: (data) => {
    popupChangeAvatar.updateButtonState('Сохранение...')
    api.sendAvatarProfile(data.linkavatar)
      .then((result) => {
        userInfo.setUserAvatar(result.avatar);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        popupChangeAvatar.updateButtonState('Сохранить')
      })
  }
});
popupChangeAvatar.setEventListeners();


