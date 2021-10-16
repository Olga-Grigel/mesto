export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this)
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }
    //содержит логику закрытия попапа клавишей Esc
    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }
    setEventListeners() {
        this._closeButtonPopup = this._popup.querySelector('.popup__close');

        this._closeButtonPopup.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('mousedown', (event) => {
            if (event.target !== event.currentTarget) {
                return;
            } else {
                this.close();
            }
        });
    }
}

