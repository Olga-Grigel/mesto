import { Popup } from "./Popup.js";

export class PopupWithSabmit extends Popup {
    constructor({ popupSelector }) {
        super(popupSelector)
    }
    setEventListeners(apiDeleteCard) {
        this._popupFormWithSabmit = this._popup.querySelector('.popup__form_with_sabmit');
        this._popupFormWithSabmit.addEventListener('submit', (evt) => {
            evt.preventDefault();
            apiDeleteCard();
        })
        super.setEventListeners();

    }
}