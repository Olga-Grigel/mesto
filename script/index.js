//Открытие/Закрытие попапа:

const ProfileEditButton = document.querySelector(".profile__edit-button");
const Popup = document.querySelector('.popup')
const PopupClose = Popup.querySelector('.popup__close')

const openPopup = function(){
  Popup.classList.add('popup_opened');
}

const openPopupProfile = function(){
  openPopup();
  Input[0].value = ProfileTitle.textContent;
  Input[1].value = ProfileSubtitle.textContent;
}

const closePopup = function() {
  Popup.classList.remove('popup_opened')
  Input[0].value = '';
  Input[1].value = '';
}

ProfileEditButton.addEventListener('click', openPopupProfile);
PopupClose.addEventListener('click', closePopup);


const Input = Popup.querySelectorAll('input');
const ProfileTitle = document.querySelector ('.profile__title');
const ProfileSubtitle = document.querySelector ('.profile__subtitle');

const SaveButton = Popup.querySelector ('.popup__save');

function Save(evt){
  evt.preventDefault();
  ProfileTitle.textContent = Input[0].value;
  ProfileSubtitle.textContent = Input[1].value;
  closePopup ();
}

const popupForm = Popup.querySelector('.popup__form')

popupForm.addEventListener('submit', Save);

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
const ProfileAddButton=document.querySelector('.profile__add-button');
const PopupAddElement=document.querySelector('.popup_add_element');
const InputAddElement=PopupAddElement.querySelectorAll('input');

const openPopupAddElement = function(){
  PopupAddElement.classList.add('popup_opened');
}

ProfileAddButton.addEventListener('click', openPopupAddElement);


const closePopupAddElement = function() {
  PopupAddElement.classList.remove('popup_opened');
  InputAddElement[0].value = '';
  InputAddElement[1].value = '';
}
const popupCloseAddElement=PopupAddElement.querySelector('.popup__close_add_element')
popupCloseAddElement.addEventListener('click', closePopupAddElement);

function addCard(text, links) {
  const elementTemplate=document.querySelector('#element-template').content;
  const element=elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__photo').src=links;
  element.querySelector('.element__text').textContent=text;
  return element;
  };
  
initialCards.forEach(function(item){
  elements.append(addCard(item.name, item.link));
});

const SaveAddElement=function(evt){
  evt.preventDefault();
  elements.append(addCard(InputAddElement[0].value, InputAddElement[1].value));
  closePopupAddElement ();
};
  
const popupFormAddElement = PopupAddElement.querySelector('.popup__form_add_element')

popupFormAddElement.addEventListener('submit', SaveAddElement);

//Удаление карточек:

const DeleteCard = function(event) {
  if(event.target.className!=='element__trash'){
    return
 }
 const element=event.target.closest('.element');
 element.remove();
};

elements.addEventListener('click', DeleteCard);

//Лайки карточек:

const LikeActive = function(event) {
  if(event.target.className ==='element__like'){
    event.target.className='element__like_active';
 } else if (event.target.className==='element__like_active') {
    event.target.className ='element__like'
 } else {
    return;
 }
};

elements.addEventListener('click', LikeActive);

//Просмотр фото (увеличение):
//    открытие/закрытие попапа:

const PopupPhoto=document.querySelector('.popup-photo');
const popupPhotoClose=PopupPhoto.querySelector('.popup-photo__close');

const OpenPhoto = function(event) {
  if(event.target.className!=='element__photo'){
    return
 }
 PopupPhoto.classList.add('popup-photo_opened');
};

elements.addEventListener('click', OpenPhoto);

const closePhoto = function(){
  PopupPhoto.classList.remove('popup-photo_opened');
}

popupPhotoClose.addEventListener('click', closePhoto)

//    подстановка текста и фото, которые открываются:


const InsernPhotoAndTextToPopap=(event)=> {
  const popupPhotoText=PopupPhoto.querySelector('.popup-photo__text');
  const popupPhotoPhoto=PopupPhoto.querySelector('.popup-photo__photo');

  popupPhotoText.textContent=event.target.nextElementSibling.textContent;
  popupPhotoPhoto.setAttribute('src', event.target.getAttribute('src'));
}
elements.addEventListener('click', InsernPhotoAndTextToPopap);

