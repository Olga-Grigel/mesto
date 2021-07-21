const Obj={
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name_type_error',
  errorClass: 'popup__name-error_active'
};
const showInputError = (formElement,inputElement,errorMessage)=>{
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(Obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(Obj.errorClass);
};
const hideInputError = (formElement,inputElement)=>{
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(Obj.inputErrorClass);
  errorElement.classList.remove(Obj.errorClass);
  errorElement.textContent = '';
}

const isValid = (formElement,inputElement)=>{
  if(!inputElement.validity.valid){
    showInputError(formElement,inputElement,inputElement.validationMessage);
  }else{
    hideInputError(formElement,inputElement);
  }
};

const hasInvalidInput = (inputList)=>{
  return inputList.some((inputElement)=>{
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement)=>{
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(Obj.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(Obj.inactiveButtonClass);
  }
};

setEventListeners = (formElement)=>{
  const inputList = Array.from(formElement.querySelectorAll(Obj.inputSelector));
  const buttonElement = formElement.querySelector(Obj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement)=>{
    inputElement.addEventListener('input',()=>{
      toggleButtonState(inputList, buttonElement);
      isValid(formElement,inputElement)
    })
  })
}

const enableValidation = (Obj)=>{
  const formList=Array.from(document.querySelectorAll(Obj.formSelector));
  formList.forEach((formElement)=>{
    formElement.addEventListener('submit',(evt)=>{
      evt.preventDefault();
    });
    setEventListeners(formElement);
  })
};

enableValidation(Obj)