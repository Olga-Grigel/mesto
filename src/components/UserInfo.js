export class UserInfo {
    constructor({ titleSelector, subtitleSelector }) {
        this._title = document.querySelector(titleSelector);
        this._subtitle = document.querySelector(subtitleSelector);
    }
    getUserInfo() {
        this._formValues = {
            profile__title: this._title.textContent,
            profile__subtitle: this._subtitle.textContent
        };
        return this._formValues;
    }
    setUserInfo(data) {
        //получаем объект с ключами и устанавливаем их в разметку
        this._title.textContent = data.main;
        this._subtitle.textContent = data.activiti;
    }
}