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
    //Спасибо большое за такое подробное объяснение, я поняла!
    setUserInfo(name, about) {
        this._title.textContent = name;
        this._subtitle.textContent = about;
    }
    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }//только сейчас увидела еще один setUserAvatar, спасибо, ох уже эти ночные посиделки, голова уже чумная, 
    //столько лишней работы и времени потратила из-за этого метода, на неделю уже опаздываю
}