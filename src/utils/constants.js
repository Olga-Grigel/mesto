export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileAddButton = document.querySelector(".profile__add-button");
export const popupChangeProfile = document.querySelector('.popup_change_profile');
export const popupFormChangeProfile = popupChangeProfile.querySelector('.popup__form_change_profile');
export const popupFormChangeAvatar = document.querySelector('.popup__form_change_avatar');
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