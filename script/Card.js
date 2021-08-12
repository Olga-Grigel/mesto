//Класс по созданию карточек
import {openPopup} from './index.js';

export class Card {
  constructor(data, cardSelector){
    this._cardSelector = cardSelector;
    this._text = data.name;
    this._link = data.link;
  }
  
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementTrash = this._element.querySelector('.element__trash');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementPhoto = this._element.querySelector('.element__photo');
    this._popupOpenPhoto = document.querySelector('.popup_open_photo'); 
    this._popupTextOpenPhoto = this._popupOpenPhoto.querySelector('.popup__text_open_photo'); 
    this._popupPhotoOpenPhoto = this._popupOpenPhoto.querySelector('.popup__photo_open_photo');

    this._setEventListeners();
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._text;
    this._element.querySelector('.element__text').textContent = this._text;
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
  }
}
