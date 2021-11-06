export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    getInitialCards() {
        return fetch(this._url + '/cohort-29/cards', {
            method: 'GET',
            headers: this._headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    };
    getInitialProfile() {
        return fetch(this._url + '/cohort-29/users/me', {
            method: 'GET',
            headers: this._headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    };
    sendDataProfile(name, activiti) {
        return fetch(this._url + '/cohort-29/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name.value,
                about: activiti.value
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    };
    sendNewCard(formData) {
        return fetch(this._url + '/cohort-29/cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: formData.name,
                link: formData.link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    };
    deleteCards(cardId) {
        return fetch(`${this._url}/cohort-29/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    };
    sendAvatarProfile(avatar) {
        return fetch(this._url + '/cohort-29/users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    };
    changeLikeCardStatus(cardId, callbackBoolean, likes) {
        if (callbackBoolean === false) {
            return fetch(`${this._url}/cohort-29/cards/likes/${cardId}`, {
                method: 'PUT',
                headers: this._headers,
                body: JSON.stringify({
                    likes
                })
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    return Promise.reject(`Ошибка: ${res.status}`);
                })
        } else {
            return fetch(`${this._url}/cohort-29/cards/likes/${cardId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    return Promise.reject(`Ошибка: ${res.status}`);
                })

        }
    }
}