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

//Функция с экземпляром класса Section для добавления новых карточек в разметку
const section = (items) => {
  const uneversalSection = new Section({
    items: items,
    renderer: (item) => {
      const cardElement = createCard(item);
      uneversalSection.addItem(cardElement);
    }
  }, '.elements')
  uneversalSection.renderItems();
};

//Экземпляр класса Card
const createCard = (data) => {
  const card = new Card({
    data,

    handleCardClick: () => {
      popupWithImage.open();
    },

    handleDeleteIconClick: (idCard) => {
      popupWithSabmit.open();
      popupWithSabmit.setSubmitAction(() => {
        api.deleteCards(idCard)
          .then(() => {
            card.removeCard();
            popupWithSabmit.close();
          })
          .catch(err => alert(err))
      });
    },

    likeCard(idCard, likes, elementLike, elementNumberLikes) {
      api.changeLikeCardStatus(idCard, card.isLiked(), likes)
        .then((res) => {
          elementNumberLikes.textContent = res.likes.length;
          elementLike.classList.toggle('element__like_active');
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
popupWithSabmit.setEventListeners(
  //Передаем коллбек удаление карточки с сервера и из разметки
  () => {

    api.deleteCards(item.id)
      .then((res) => {
        card.removeCard();
        popupWithSabmit.close();
      })
      .catch((err) => {
        alert(err);
      });
  });

let userId = null

Promise.all([ //в Promise.all передаем массив промисов которые нужно выполнить
  api.getInitialProfile(),
  api.getInitialCards()
])
  .then((values) => {
    //получение данных профиля
    userInfo.setUserInfo(values[0].name, values[0].about);
    userInfo.setUserAvatar(values[0].avatar)
    userId = values[0]._id;

    //получение всех карточек
    const dataCard = values[1].map((item) => ({ name: item.name, link: item.link, likes: item.likes, likesId: item.likes.map((item) => ({ likesid: item._id })), ownerId: item.owner._id, id: item._id }));
    //Создание экземпляра Section для добавления в разметку всех карточек с сервера
    section(dataCard);
  })
  .catch((err) => { alert(err); })

//Экземпляр класса PopupWithForm для попапа добавления карточек
const popupAddElement = new PopupWithForm({
  popupSelector: '.popup_add_element',
  submitForm: (formData) => {
    //Добавление новой карточки на сервер
    document.querySelector('.popup__save_add_element').textContent = 'Сохранение...'
    api.sendNewCard(formData)
      .then((data) => {
        // передаём экземпляру методу создания карточки с помощью класса Card данные
        section([data]);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        document.querySelector('.popup__save_add_element').textContent = 'Создать'
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
    document.querySelector('.popup__save_change_profile').textContent = 'Сохранение...'
    //Отправка данных профиля на сервер
    api.sendDataProfile(profileNameInput.value, profileActivitiInput.value)
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about);
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => {
        document.querySelector('.popup__save_change_profile').textContent = 'Сохранить'
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
    document.querySelector('.popup__save_change_avatar').textContent = 'Сохранение...'
    api.sendAvatarProfile(data.linkavatar)
      .then((result) => {
        userInfo.setUserAvatar(result.avatar)
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        document.querySelector('.popup__save_change_avatar').textContent = 'Сохранить'
      })
  }
});
popupChangeAvatar.setEventListeners();


