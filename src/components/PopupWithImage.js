import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTextOpenPhoto = this._popup.querySelector('.popup__text_open_photo');
        this._popupPhotoOpenPhoto = this._popup.querySelector('.popup__photo_open_photo');

    }
    open({ text, link }) {
        this._text = text;
        this._link = link;
        super.open();
        this._popupTextOpenPhoto.textContent = this._text;
        this._popupPhotoOpenPhoto.src = this._link;
        this._popupPhotoOpenPhoto.alt = this._text;
    }
};