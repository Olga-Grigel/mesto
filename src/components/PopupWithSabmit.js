import { Popup } from "./Popup.js";

export class PopupWithSabmit extends Popup {
    constructor({ popupSelector}) {
        super(popupSelector);
    }
    setEventListeners(element) {
        this._popupFormWithSabmit = this._popup.querySelector('.popup__form_with_sabmit');
        this._popupFormWithSabmit.addEventListener('submit', (evt) => {
            evt.preventDefault();
            element.remove();
            this.close();
        })
        super.setEventListeners();
        
    }
}