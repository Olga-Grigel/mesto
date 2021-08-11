import {openPopup, closePopup} from './index.js';
 
//Класс по созданию карточек
export class Card {
  constructor(text,link, cardSelector){
    this._cardSelector = cardSelector;
    this._text = text;
    this._link = link;
  }
  
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }
  
  _createCard() {
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._text;
    this._element.querySelector('.element__text').textContent = this._text;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementTrash = this._element.querySelector('.element__trash');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementPhoto = this._element.querySelector('.element__photo');
    this._popupOpenPhoto = document.querySelector('.popup_open_photo');
    this._popupTextOpenPhoto = this._popupOpenPhoto.querySelector('.popup__text_open_photo');
    this._popupPhotoOpenPhoto = this._popupOpenPhoto.querySelector('.popup__photo_open_photo');
    this._popupCloseOpenPhoto = document.querySelector('.popup__close_open_photo');

    this._setEventListeners();
    this._createCard();
    return this._element;
  }
  
  _handleOpenPopup() {
    this._popupTextOpenPhoto.textContent = this._text;
    this._popupPhotoOpenPhoto.src = this._link;
    this._popupPhotoOpenPhoto.alt = this._text;
    openPopup(this._popupOpenPhoto);
  }
  
  _setEventListeners() {
    this._elementTrash.addEventListener('click', (event)=>{
    this._element.remove();
    });

    this._elementLike.addEventListener('click',()=>{
      this._elementLike.classList.toggle('element__like_active');
    });
    
    this._elementPhoto.addEventListener('click', ()=>{
    this._handleOpenPopup()
    });

    this._popupCloseOpenPhoto.addEventListener('click', ()=>{
    closePopup(this._popupOpenPhoto);
    })
  }
}
