import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
    constructor({ popupSelector }) {
        super(popupSelector)
    }
    setSubmitAction(func) {
        this._func = func;
    }
    setEventListeners() {
        this._popupFormWithSubmit = this._popup.querySelector('.popup__form_with_sabmit');
        this._popupFormWithSubmit.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._func();
        })
        super.setEventListeners();

    }
}