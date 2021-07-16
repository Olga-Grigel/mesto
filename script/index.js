//Открытие/Закрытие попапа профиля:

const profileEditButton = document.querySelector(".profile__edit-button");
const popupChangeProfile = document.querySelector('.popup_change_profile');
const popupCloseChangeProfile = popupChangeProfile.querySelector('.popup__close_change_profile');
const popupFormChangeProfile = popupChangeProfile.querySelector('.popup__form_change_profile');
const profileTitle = document.querySelector ('.profile__title');
const profileSubtitle = document.querySelector ('.profile__subtitle');
const profileNameInput=popupFormChangeProfile.elements.name;
const profileActivitiInput=popupFormChangeProfile.elements.activiti

const openPopup = function(elementPopup){
  elementPopup.classList.add('popup_opened');
}

const openPopupProfile = function(){
  openPopup(popupChangeProfile);
  profileNameInput.value = profileTitle.textContent;
  profileActivitiInput.value = profileSubtitle.textContent;
}

const closePopup = function(elementPopup) {
  elementPopup.classList.remove('popup_opened')
}

profileEditButton.addEventListener('click', openPopupProfile);
popupCloseChangeProfile.addEventListener('click', ()=>{
   closePopup(popupChangeProfile);
});

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileSubtitle.textContent = profileActivitiInput.value;
  closePopup(popupChangeProfile);
}

popupFormChangeProfile.addEventListener('submit', handleProfileFormSubmit);

// Карточки из массива и добавление новых карточек:

const initialCards = [
  {
    name: 'Маяк',
    link: 'https://images.unsplash.com/photo-1502088026787-2532dc33d2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Аораки',
    link: 'https://images.unsplash.com/photo-1589023498616-dbf5d0122fc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Горы',
    link: 'https://images.unsplash.com/photo-1568362711661-ffb64f7500ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Милфорд-Саунд',
    link: 'https://images.unsplash.com/photo-1578127033857-8b1450a3b0ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Новая Зеландия',
    link: 'https://images.unsplash.com/photo-1561046002-ced99fe6770c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Квинстаун',
    link: 'https://images.unsplash.com/photo-1592275142354-0d765e9a9c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const elements=document.querySelector('.elements');
const profileAddButton=document.querySelector('.profile__add-button');
const popupAddElement=document.querySelector('.popup_add_element');
const popupFormAddElement = popupAddElement.querySelector('.popup__form_add_element');
const popupCloseAddElement=popupAddElement.querySelector('.popup__close_add_element');
const elementTemplate=document.querySelector('#element-template').content;
const popupOpenPhoto=document.querySelector('.popup_open_photo');
const popupCloseOpenPhoto=popupOpenPhoto.querySelector('.popup__close_open_photo');
const popupTextOpenPhoto=popupOpenPhoto.querySelector('.popup__text_open_photo');
const popupPhotoOpenPhoto=popupOpenPhoto.querySelector('.popup__photo_open_photo');
const elementTitleInput=popupFormAddElement.elements.title;
const elementLinkInput=popupFormAddElement.elements.link

profileAddButton.addEventListener('click', ()=>{
  openPopup(popupAddElement);
});

popupCloseAddElement.addEventListener('click', ()=>{
  closePopup(popupAddElement);
  popupFormAddElement.reset();
});

function createCard(text, links) {
  const element=elementTemplate.querySelector('.element').cloneNode(true);
  const elementPhoto=element.querySelector('.element__photo');
  elementPhoto.src=links;
  elementPhoto.alt=text;
  element.querySelector('.element__text').textContent=text;
  const elementTrash=element.querySelector('.element__trash');
  const elementLike=element.querySelector('.element__like');
   
  elementTrash.addEventListener('click', (event)=>{
    element.remove();
  });
  elementLike.addEventListener('click',()=>{
    elementLike.classList.toggle('element__like_active');
  });
  
  elementPhoto.addEventListener('click', ()=>{
    popupTextOpenPhoto.textContent = text;
    popupPhotoOpenPhoto.src = links;
    popupPhotoOpenPhoto.alt = text;
    openPopup(popupOpenPhoto);
  });
  return element;
  };
  
initialCards.forEach(function(item){
  elements.prepend(createCard(item.name, item.link));
});

const saveAddElement=function(evt){
  evt.preventDefault();
  elements.prepend(createCard(elementTitleInput.value, elementLinkInput.value));
  popupFormAddElement.reset();
  closePopup(popupAddElement);
};

popupCloseOpenPhoto.addEventListener('click', ()=>{
  closePopup(popupOpenPhoto);
})

popupFormAddElement.addEventListener('submit', saveAddElement);