import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupTextOpenPhoto = this._popup.querySelector('.popup__text_open_photo');
        this._popupPhotoOpenPhoto = this._popup.querySelector('.popup__photo_open_photo');
        
    }
    open(data) {
        this._text = data.name;
        this._link = data.link;
        super.open();
        this._popupTextOpenPhoto.textContent = this._text;
        this._popupPhotoOpenPhoto.src = this._link;
        this._popupPhotoOpenPhoto.alt = this._text;
    }
};

