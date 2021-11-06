//Класс по созданию карточек 

export class Card {
  constructor({ data, handleCardClick, callbackDeleteWithSabmit, apiLikeCard }, cardSelector, userId) {
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._text = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._callbackDeleteWithSabmit = callbackDeleteWithSabmit;
    this._apiLikeCard = apiLikeCard;
    this._userId = userId
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  isLiked() {
    return Boolean(this._likes.find(item => item._id === this._userId));
  }

  _marcLikeBlack() {
    if (this.isLiked() === true) {
      this._elementLike.classList.toggle('element__like_active');
    }
  }
  generateCard() {
    this._element = this._getTemplate();
    this._elementTrash = this._element.querySelector('.element__trash');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementPhoto = this._element.querySelector('.element__photo');
    this._elementNumberLikes = this._element.querySelector('.element__number-likes')

    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._text;
    this._element.querySelector('.element__text').textContent = this._text;
    this._elementNumberLikes.textContent = this._likes.length;
    this._marcLikeBlack();
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {

    this._elementTrash.addEventListener('click', () => {
      this._callbackDeleteWithSabmit({ element: this._element, cardId: this._id })
    });

    this._elementLike.addEventListener('click', () => {
      this._apiLikeCard(this._likes, this._element);
      if (this._elementLike.classList.contains('element__like_active')) {
        this._elementNumberLikes.textContent = this._elementNumberLikes.textContent - 1;
      } else {
        this._elementNumberLikes.textContent = + this._elementNumberLikes.textContent + 1;
      }
      this._elementLike.classList.toggle('element__like_active');
    });

    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick()
    });

  }
}