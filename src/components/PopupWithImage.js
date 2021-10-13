import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this._text = data.name;
        this._link = data.link;
    }
    open() {
        super.open();
        this._popupTextOpenPhoto = this._popupSelector.querySelector('.popup__text_open_photo');
        this._popupPhotoOpenPhoto = this._popupSelector.querySelector('.popup__photo_open_photo');
        this._popupTextOpenPhoto.textContent = this._text;
        this._popupPhotoOpenPhoto.src = this._link;
        this._popupPhotoOpenPhoto.alt = this._text;
    }
};

