import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({ popupSelector, submitForm }) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._inputList = this._popup.querySelectorAll('.popup__name');
    }
    _getInputValues() {
        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        // возвращаем объект значений
        console.log(this._formValues)
        return this._formValues;
    }
    close() {
        this._popupForm.reset();
        super.close();
    }
    setEventListeners() {
        this._popupForm = this._popup.querySelector('.popup__form');
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();

            // добавим вызов функции _submitForm, передадим ей объект — результат работы _getInputValues
            this._submitForm(this._getInputValues());
            this.close();
        })
        super.setEventListeners();
    }
}