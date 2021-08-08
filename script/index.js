  import {Card} from './Card.js';
  import {Obj, FormValidator} from './FormValidator.js';

const ChartIndex = (function() {
  const profileEditButton = document.querySelector(".profile__edit-button");
  const popupChangeProfile = document.querySelector('.popup_change_profile');
  const popupCloseChangeProfile = popupChangeProfile.querySelector('.popup__close_change_profile');
  const popupFormChangeProfile = popupChangeProfile.querySelector('.popup__form_change_profile');
  const profileTitle = document.querySelector ('.profile__title');
  const profileSubtitle = document.querySelector ('.profile__subtitle');
  const profileNameInput = popupFormChangeProfile.elements.name;
  const profileActivitiInput = popupFormChangeProfile.elements.activiti;
  //const popupNameChangeProfile = popupChangeProfile.querySelector('.popup__name_change_profile');
  const elementss = document.querySelector('.elements');
  const popupAddElement = document.querySelector('.popup_add_element');
  const popupFormAddElement = popupAddElement.querySelector('.popup__form_add_element');
  const popupOpenPhoto = document.querySelector('.popup_open_photo');
  const elementTitleInput = popupFormAddElement.elements.title;
  const elementLinkInput = popupFormAddElement.elements.link;
  
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

  // Функция закрытия попапа клавишей ESC
  const closePopupClickEsc = (event)=>{
    if (event.key === 'Escape'){
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
      }
  };
// Функция открытия попапа
  const openPopup = function(elementPopup){
    elementPopup.classList.add('popup_opened');
    document.addEventListener('keyup',closePopupClickEsc);
  };
// Функция закрытия попапа
  const closePopup = function(elementPopup) {
    elementPopup.classList.remove('popup_opened');
    document.removeEventListener('keyup',closePopupClickEsc);
  }

  const openPopupProfile = function(){
    openPopup(popupChangeProfile);
    profileNameInput.value = profileTitle.textContent;
    profileActivitiInput.value = profileSubtitle.textContent;
    const CleaningChangeProfile = new FormValidator(Obj, popupChangeProfile);
    CleaningChangeProfile.cleaningPopup();
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

//Дочерний класс по созданию карточек из массива
  class CardArray extends Card {
    constructor(data, cardSelector){
      super(cardSelector);
      this._text = data.name;
      this._link = data.link;
    }
  }

  initialCards.forEach((item)=> {
    const card = new CardArray (item, '.element-template');
    const cardElement = card.generateCard();
    elementss.prepend(cardElement);// Добавляем в DOM
  });

//Дочерний класс по созданию новых карточек в модальном окне
  class NewCard extends Card {
   constructor(text,link, cardSelector){
     super(cardSelector);
      this._text = text;
      this._link = link
    }
  }

  const saveAddElement=function(evt){
    const newCard = new NewCard (elementTitleInput.value,elementLinkInput.value,'.element-template')
    const newCardElement = newCard.generateCard();  
    elementss.prepend(newCardElement);// Добавляем в DOM
    evt.preventDefault();
    popupFormAddElement.reset();
    closePopup(popupAddElement);
  };
  popupFormAddElement.addEventListener('submit', saveAddElement);

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
  
}());