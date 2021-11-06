import './index.css'; // добавьте импорт главного файла стилей
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

//функция создания карточек
const popupWithImage = new PopupWithImage('.popup_open_photo');
popupWithImage.setEventListeners();

const popupWithSabmit = new PopupWithSabmit({
  popupSelector: '.popup_with_sabmit'
})


const createCard = (data) => {
  const card = new Card({
    data,

    handleCardClick: () => {
      popupWithImage.open(data);
    },

    ///этот коллбек из 9 проекта
    callbackDeleteWithSabmit: ({
      element,
      cardId: cardId
    }) => {
      popupWithSabmit.open();
      popupWithSabmit.setEventListeners(
        //Передаем коллбек удаление карточки с сервера и из разметки
        () => {
          api.deleteCards(cardId)
            .then(() => {
              element.remove();
              popupWithSabmit.close();
            })
            .catch((err) => {
              alert(err);
            });
        });
    },

    apiLikeCard(likes, element) {
      api.changeLikeCardStatus(card._id, card.isLiked(), likes)

        .catch((err) => {
          alert(err);
        });
    }
  },
    '.element-template', userId);
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
    formData.likes = [];
    //Добавление новой карточки на сервер
    api.sendNewCard(formData)
      .finally(() => {
        document.querySelector('popup__save_add_element').textContent = 'Сохранение...'
      })
      .then((data) => {
        // передаём экземпляру Card объект с данными формы
        const cardElement = createCard({ name: data.name, link: data.link, likes: data.likes });
        section.addItem(cardElement);
      })
      .catch((err) => {
        alert(err);
      });
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
    //Отправка данных профиля на сервер
    api.sendDataProfile(profileNameInput, profileActivitiInput)
      .finally(() => {
        document.querySelector('popup__save_change_profile').textContent = 'Сохранение...'
      })
      .then((data) => {
        userInfo.setUserInfo({ main: data.name, activiti: data.about });
      })
      .catch((err) => {
        alert(err);
      });

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

//Инициализация класса Api (работа с сервером)
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1",
  headers: {
    authorization: '991e328d-0927-45d2-8b32-8b35ae054b8c',
    'Content-Type': 'application/json'
  }
});

//Получение данных профиля с сервера
let userId = null;

api.getInitialProfile()
  .then((result) => {
    document.querySelector('.profile__title').textContent = result.name;
    document.querySelector('.profile__subtitle').textContent = result.about;
    document.querySelector('.profile__avatar').src = result.avatar;
    userId = result._id;
  })
  .catch((err) => {
    alert(err);
  });

//Получение всех карточек с сервера

const getCard = api.getInitialCards();

getCard
  .then((result) => {
    const dataCard = result.map((item) => ({ name: item.name, link: item.link, likes: item.likes, likesId: item.likes.map((item) => ({ likesid: item._id })), ownerId: item.owner._id, id: item._id }));

    //Создание экземпляра Section для добавления в разметку всех карточек с сервера
    const section = new Section({
      items: dataCard,
      renderer: (item) => {
        const cardElement = createCard(item);
        section.addItem(cardElement);
        if (item.ownerId != userId) {
          cardElement.querySelector('.element__trash').classList.add('element__trash_none');
        }
      }
    }, '.elements')
    section.renderItems();
  })
  .catch((err) => {
    alert(err);
  });

//Экземпляр класса PopupWithForm для попапа изменения профиля
document.querySelector('.profile__ikon').addEventListener('click', () => {
  classFormChangeAvatar.open();
  avatarFormValidator.resetValidation()
})

const classFormChangeAvatar = new PopupWithForm({
  popupSelector: '.popup_change_avatar',
  submitForm: (data) => {
    document.querySelector('.profile__avatar').src = data.linkavatar;
    debugger;
    api.sendAvatarProfile(data.linkavatar)
      .finally(() => {
        document.querySelector('popup__save_change_avatar').textContent = 'Сохранение...'
      })
      .then((result) => {
        document.querySelector('.profile__avatar').src = result.avatar;
      })
      .catch((err) => {
        alert(err);
      });
    avatarFormValidator.resetValidation()
  }
});
classFormChangeAvatar.setEventListeners();