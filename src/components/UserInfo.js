export class UserInfo {
    constructor({ titleSelector, subtitleSelector, avatarSelector }) {
        this._title = document.querySelector(titleSelector);
        this._subtitle = document.querySelector(subtitleSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    getUserInfo() {
        this._formValues = {
            profile__title: this._title.textContent,
            profile__subtitle: this._subtitle.textContent,
            profile__avatar: this._avatar.src,
        };
        return this._formValues;
    }
    setUserInfo({name, about, avatar}) {
        if(avatar === undefined) {
            this._title.textContent = name;
            this._subtitle.textContent = about;
        } else if (name===undefined & about===undefined){
            this._avatar.src = avatar
        } else {
            this._title.textContent = name;
            this._subtitle.textContent = about;
            this._avatar.src = avatar
        }
    }
    /*setUserAvatar(avatar) {
        //получаем объект с ключами и устанавливаем их в разметку
        this._avatar.textContent = avatar;
    }*/
    /*getUserAvatar() {
        this._formValues = {
            profile__avatar: this._avatar.src
        };
        return this._formValues;
    }*/
    setUserAvatar(linkavatar) {
        //получаем объект с ключами и устанавливаем их в разметку
        this._avatar.src = linkavatar
    }
}