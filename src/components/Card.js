//Класс по созданию карточек 

export class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

    this._setEventListeners();
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._text;
    this._element.querySelector('.element__text').textContent = this._text;

    return this._element;
  }

  _setEventListeners() {
    this._elementTrash.addEventListener('click', (event) => {
      this._element.remove();
    });

    this._elementLike.addEventListener('click', () => {
      this._elementLike.classList.toggle('element__like_active');
    });
    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick()
    });

  }
}