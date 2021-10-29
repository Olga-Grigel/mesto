//Класс по созданию карточек 

export class Card {
  constructor({ data, handleCardClick, callbackDeleteWithSabmit }, cardSelector) {
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._text = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._callbackDeleteWithSabmit = callbackDeleteWithSabmit;
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

    this._setEventListeners();
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._text;
    this._element.querySelector('.element__text').textContent = this._text;
    this._element.querySelector('.element__number-likes').textContent = this._likes.length;
    return this._element;
  }

  _setEventListeners() {
    this._elementTrash.addEventListener('click', (event) => {

      //document.querySelector('.popup_with_sabmit').classList.add('popup_opened')//когда сделаю дочерний класс для этого попапа, заменить эту строчку на вызов колбека этого класса(добавить этот колбек в сонструктор)
      this._callbackDeleteWithSabmit(this._element)
      //this._element.remove(); Перенести вызов удаления в выше сказанный дочерний класс(this._element в методе этого класса сделать переменной)
    });

    this._elementLike.addEventListener('click', () => {
      this._elementLike.classList.toggle('element__like_active');
    });
    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick()
    });

  }
}