const showInputError=(formElement,inputElement,errorMessage)=>{
  const errorElement=formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__name_type_error');
  errorElement.textContent=errorMessage;
  errorElement.classList.add('popup__name-error_active');
};
const hideInputError=(formElement,inputElement)=>{
  const errorElement=formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__name_type_error');
  errorElement.classList.remove('popup__name-error_active');
  errorElement.textContent='';
}

const isValid=(formElement,inputElement)=>{
  if(!inputElement.validity.valid){
    showInputError(formElement,inputElement,inputElement.validationMessage);
  }else{
    hideInputError(formElement,inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save_inactive');
  } else {
    buttonElement.classList.remove('popup__save_inactive');
  }
};

setEventListeners=(formElement)=>{
  const inputList=Array.from(formElement.querySelectorAll('.popup__name'));
  const buttonElement=formElement.querySelector('.popup__save');
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement)=>{
    inputElement.addEventListener('input',()=>{
      toggleButtonState(inputList, buttonElement);
      isValid(formElement,inputElement)
    })
  })
}

const enableValidation=()=>{
  const formList=Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement)=>{
    formElement.addEventListener('submit',(evt)=>{
      evt.preventDefault();
    });
    setEventListeners(formElement);
  })
}

enableValidation();

 