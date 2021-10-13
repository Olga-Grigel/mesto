export class UserInfo {
    constructor({ titleSelector, subtitleSelector }) {
        this._titleSelector = document.querySelector(titleSelector);
        this._subtitleSelector = document.querySelector(subtitleSelector);
    }
    getUserInfo() {
        this._inputList = document.querySelectorAll('.profile__data');

        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.classList[0]] = input.textContent;
        });

        // возвращаем объект значений
        console.log(this._formValues)
        return this._formValues;
    }
    setUserInfo(data) {
        //console.log(data)
        //получаем объект с ключами и устанавливаем их в разметку
        this._titleSelector.textContent = data.main;
        this._subtitleSelector.textContent = data.activiti;
    }
}