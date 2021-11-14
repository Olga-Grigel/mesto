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
    //Первый вариант не могу применить, так как у меня в двух местах textContent нужно поменять,
    // а в одном src это никак не унифицировать(или может я опять что-то не поняла?), 
    //сделаю вторым вариантом.
    setUserInfo(name, about) {
        this._title.textContent = name;
        this._subtitle.textContent = about;
    }
    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }

    setUserAvatar(linkavatar) {
        //получаем объект с ключами и устанавливаем их в разметку
        this._avatar.src = linkavatar
    }
}