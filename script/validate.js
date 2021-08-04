const Obj={
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error_active'
};
//начало нового кода
class FormValidator {
  constructor(data, form){
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form
  }
  _showInputError (errorMessage) {
    this._inputElement = this._form.querySelector(this._inputSelector);
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };
  _hideInputError() {
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  }
  
  _isValid() {
    if(!this._inputElement.validity.valid){
      showInputError(this._inputElement.validationMessage);
    }else{
      hideInputError();
    }
  };
  
  _hasInvalidInput(inputList) {
    return inputList.some(()=>{
      return !this._inputElement.validity.valid;
    })
  };
  
  _toggleButtonState() {
    if (hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };
  
  _setEventListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    
    this._inputList.forEach(()=>{
      this._inputElement.addEventListener('input',()=>{
        toggleButtonState();
        isValid()
      })
    })
  }
  
  enableValidation() {
    this._form.addEventListener('submit',(evt)=>{
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}

const formList = Array.from(document.querySelectorAll(Obj.formSelector));
formList.forEach((formElement)=> {
  const card = new FormValidator (Obj, formElement);
  card.enableValidation();
  });
//Конец нового кода
