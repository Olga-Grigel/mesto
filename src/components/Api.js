export class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
        //this._authorization = config.headers.authorization;
    }
    getInitialCards() {
        return fetch(this._url + '/cohort-29/cards', {
            method: 'GET',
            headers: this._headers
        })
            .then(res => res.json())
    };
    getInitialProfile() {
        return fetch(this._url + '/cohort-29/users/me', {
            method: 'GET',
            headers: this._headers
        })
            .then(res => res.json())
    };
    sendDataProfile(name, activiti) {
        return fetch(this._url + '/cohort-29/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name.value,
                about: activiti.value
            })
        });
    }
    sendNewCard(formData) {
        return fetch(this._url + '/cohort-29/cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: formData.name,
                link: formData.link
            })
        });
    }
    deleteCard(id) {
        return fetch(`${this._url} + '/cohort-29/cards'${ id }`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => res.json())
    };
}