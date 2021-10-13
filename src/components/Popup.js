export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keyup',this._handleEscClose.bind(this));
    }
    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keyup',this._handleEscClose.bind(this));
    }
    //содержит логику закрытия попапа клавишей Esc
    _handleEscClose(event) {
        if (event.key === 'Escape'){
            this.close();
        }
    }
    setEventListeners() {
        this._closeButtonPopup = this._popupSelector.querySelector('.popup__close');

        this._closeButtonPopup.addEventListener('click', ()=>{
            this.close();
        });

        this._popupSelector.addEventListener('mousedown', (event)=>{
            if (event.target !== event.currentTarget) {
              return;
            } else{
              this.close();
            }
          });
    }
}

