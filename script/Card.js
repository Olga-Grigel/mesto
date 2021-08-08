//Класс по созданию карточек
  export class Card {
    constructor(cardSelector){
        this._cardSelector = cardSelector;
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
        this._setEventListeners();
        this._element.querySelector('.element__photo').src = this._link;
        this._element.querySelector('.element__photo').alt = this._text;
        this._element.querySelector('.element__text').textContent = this._text;
    
        return this._element;
    }
    
    _handleOpenPopup() {
        const popupTextOpenPhoto = popupOpenPhoto.querySelector('.popup__text_open_photo');
        const popupPhotoOpenPhoto = popupOpenPhoto.querySelector('.popup__photo_open_photo');

        popupTextOpenPhoto.textContent = this._text;
        popupPhotoOpenPhoto.src = this._link;
        popupPhotoOpenPhoto.alt = this._text;
        openPopup(popupOpenPhoto);
    }
    
    _setEventListeners() {
        const profileAddButton = document.querySelector('.profile__add-button');
        const popupCloseAddElement = document.querySelector('.popup__close_add_element');
        const popupCloseOpenPhoto = document.querySelector('.popup__close_open_photo');
        
        this._element.querySelector('.element__trash').addEventListener('click', (event)=>{
        this._element.remove();
        });
        this._element.querySelector('.element__like').addEventListener('click',()=>{
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
        });
        profileAddButton.addEventListener('click', ()=>{
        openPopup(popupAddElement);
        const CleaningAddElement = new FormValidator(Obj, popupAddElement);
        CleaningAddElement.cleaningPopup();
        });
        popupCloseAddElement.addEventListener('click', ()=>{
        closePopup(popupAddElement);
        popupFormAddElement.reset();
        });
        this._element.querySelector('.element__photo').addEventListener('click', ()=>{
        this._handleOpenPopup()
        });
        popupCloseOpenPhoto.addEventListener('click', ()=>{
        closePopup(popupOpenPhoto);
        })
    }
  }