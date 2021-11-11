//Класс по созданию карточек 

export class Card {
  constructor({ data, handleCardClick, handleDeleteIconClick, likeCard }, cardSelector, userId) {
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._ownerId = data.ownerId;
    this._text = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._idCard = data.id;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._likeCard = likeCard;
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

  _updateLikeState() {
    if (this.isLiked()) {
      this._elementLike.classList.toggle('element__like_active');
    }
  }
  generateCard() {
    this._element = this._getTemplate();
    this._elementTrash = this._element.querySelector('.element__trash');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementPhoto = this._element.querySelector('.element__photo');
    this._elementNumberLikes = this._element.querySelector('.element__number-likes')
    if (this._ownerId != this._userId) {
      console.log(this._ownerId)
      this._element.querySelector('.element__trash').classList.add('element__trash_none');
    };
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._text;
    this._element.querySelector('.element__text').textContent = this._text;
    this._elementNumberLikes.textContent = this._likes.length;
    this._updateLikeState();
    this._setEventListeners();
    return this._element;
  }
  removeCard() {
    this._element.remove();
  }
  _setEventListeners() {

    this._elementTrash.addEventListener('click', () => {
      this._handleDeleteIconClick(this._idCard)
    });

    this._elementLike.addEventListener('click', () => {
      this._likeCard(this._idCard, this._likes, this._elementLike, this._elementNumberLikes);
    });

    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick()
    });

  }
}