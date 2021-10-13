export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileAddButton = document.querySelector(".profile__add-button");
export const popupChangeProfile = document.querySelector('.popup_change_profile');
export const popupFormChangeProfile = popupChangeProfile.querySelector('.popup__form_change_profile');
export const profileNameInput = popupFormChangeProfile.elements.main;
export const profileActivitiInput = popupFormChangeProfile.elements.activiti;
export const popupAddElement = document.querySelector('.popup_add_element');
export const popupFormAddElement = popupAddElement.querySelector('.popup__form_add_element');

//Объект с селекторами для настройки валидации форм
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error_active'
};
// Массив карточек
export const initialCards = [
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