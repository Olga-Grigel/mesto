(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,u=e.handleDeleteIconClick,a=e.likeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=n,this._handleCardClick=i,this._ownerId=o.ownerId,this._text=o.name,this._link=o.link,this._likes=o.likes,this._idCard=o.id,this._handleDeleteIconClick=u,this._likeCard=a,this._userId=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"_updateLikeState",value:function(){this.isLiked()&&this._elementLike.classList.toggle("element__like_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementTrash=this._element.querySelector(".element__trash"),this._elementLike=this._element.querySelector(".element__like"),this._elementPhoto=this._element.querySelector(".element__photo"),this._elementNumberLikes=this._element.querySelector(".element__number-likes"),this._ownerId!=this._userId&&this._element.querySelector(".element__trash").classList.add("element__trash_none"),this._elementPhoto.src=this._link,this._elementPhoto.alt=this._text,this._element.querySelector(".element__text").textContent=this._text,this._elementNumberLikes.textContent=this._likes.length,this._updateLikeState(),this._setEventListeners(),this._element}},{key:"removeCard",value:function(){this._element.remove()}},{key:"toggleLikeState",value:function(e){this._elementNumberLikes.textContent=e.likes.length,this._elementLike.classList.toggle("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._elementTrash.addEventListener("click",(function(){e._handleDeleteIconClick()})),this._elementLike.addEventListener("click",(function(){e._likeCard()})),this._elementPhoto.addEventListener("click",(function(){e._handleCardClick()}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._form.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.classList.add(this._inactiveButtonClass):this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleButtonState(),e._isValid(t)}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButtonPopup=this._popup.querySelector(".popup__close"),this._closeButtonPopup.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&o(t.prototype,n),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},s(e,t,n||e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupTextOpenPhoto=t._popup.querySelector(".popup__text_open_photo"),t._popupPhotoOpenPhoto=t._popup.querySelector(".popup__photo_open_photo"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.text,n=e.link;this._text=t,this._link=n,s(f(u.prototype),"open",this).call(this),this._popupTextOpenPhoto.textContent=this._text,this._popupPhotoOpenPhoto.src=this._link,this._popupPhotoOpenPhoto.alt=this._text}}])&&a(t.prototype,n),u}(i);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},d(e,t,n||e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function y(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._submitForm=r,t._inputList=t._popup.querySelectorAll(".popup__name"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){this._popupForm.reset(),d(m(u.prototype),"close",this).call(this)}},{key:"updateButtonState",value:function(e){this._popup.querySelector(".popup__save").textContent=e}},{key:"setEventListeners",value:function(){var e=this;this._popupForm=this._popup.querySelector(".popup__form"),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()})),d(m(u.prototype),"setEventListeners",this).call(this)}}])&&_(t.prototype,n),u}(i);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&k(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.titleSelector,r=t.subtitleSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=document.querySelector(n),this._subtitle=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._formValues={profile__title:this._title.textContent,profile__subtitle:this._subtitle.textContent,profile__avatar:this._avatar.src},this._formValues}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;void 0===r?(this._title.textContent=t,this._subtitle.textContent=n):(void 0===t&void 0===n||(this._title.textContent=t,this._subtitle.textContent=n),this._avatar.src=r)}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&g(t.prototype,n),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},L(e,t,n||e)}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function O(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,t)}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;this._popupFormWithSubmit=this._popup.querySelector(".popup__form_with_sabmit"),this._popupFormWithSubmit.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()})),L(j(u.prototype),"setEventListeners",this).call(this)}}])&&C(t.prototype,n),u}(i),q=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__add-button"),T=document.querySelector(".popup_change_profile").querySelector(".popup__form_change_profile"),B=document.querySelector(".popup__form_change_avatar"),R=T.elements.main,D=T.elements.activiti,V=document.querySelector(".popup_add_element").querySelector(".popup__form_add_element"),F={formSelector:".popup__form",inputSelector:".popup__name",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_inactive",inputErrorClass:"popup__name_type_error",errorClass:"popup__name-error_active"};function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._url+"/cohort-29/cards",{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialProfile",value:function(){return fetch(this._url+"/cohort-29/users/me",{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"sendDataProfile",value:function(e){var t=e.name,n=e.activity;return fetch(this._url+"/cohort-29/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"sendNewCard",value:function(e){return fetch(this._url+"/cohort-29/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCards",value:function(e){return fetch("".concat(this._url,"/cohort-29/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"sendAvatarProfile",value:function(e){return fetch(this._url+"/cohort-29/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t,n){return fetch("".concat(this._url,"/cohort-29/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers,body:JSON.stringify({likes:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&A(t.prototype,n),e}(),U=new r(F,T);U.enableValidation();var J=new r(F,V);J.enableValidation();var G=new r(F,B);G.enableValidation();var H=new p(".popup_open_photo");H.setEventListeners();var W=new I({popupSelector:".popup_with_sabmit"});W.setEventListeners();var z=new S({items:[],renderer:function(e){var t=M(e);z.addItem(t)}},".elements"),M=function(e){var n=new t({data:e,handleCardClick:function(){H.open({text:e.name,link:e.link})},handleDeleteIconClick:function(){W.open(),W.setSubmitAction((function(){K.deleteCards(e.id).then((function(){n.removeCard(),W.close()})).catch((function(e){return alert(e)}))}))},likeCard:function(){K.changeLikeCardStatus(e.id,n.isLiked(),e.likes).then((function(e){n.toggleLikeState(e)})).catch((function(e){alert(e)}))}},".element-template",Q);return n.generateCard()},K=new N({url:"https://mesto.nomoreparties.co/v1",headers:{authorization:"991e328d-0927-45d2-8b32-8b35ae054b8c","Content-Type":"application/json"}});W.setEventListeners();var Q=null;Promise.all([K.getInitialProfile(),K.getInitialCards()]).then((function(e){Y.setUserInfo({name:e[0].name,about:e[0].about,avatar:e[0].avatar}),Q=e[0]._id;var t=e[1].map((function(e){return{name:e.name,link:e.link,likes:e.likes,likesId:e.likes.map((function(e){return{likesid:e._id}})),ownerId:e.owner._id,id:e._id}}));z.renderItems(t)})).catch((function(e){alert(e)}));var X=new b({popupSelector:".popup_add_element",submitForm:function(e){X.updateButtonState("Сохранение..."),K.sendNewCard(e).then((function(e){var t=M({name:e.name,link:e.link,likes:e.likes,ownerId:e.owner._id});z.addItem(t)})).catch((function(e){alert(e)})).finally((function(){X.updateButtonState("Создать")}))}});X.setEventListeners();var Y=new E({titleSelector:".profile__title",subtitleSelector:".profile__subtitle",avatarSelector:".profile__avatar"});q.addEventListener("click",(function(){Z.open();var e=Y.getUserInfo();R.value=e.profile__title,D.value=e.profile__subtitle,U.resetValidation()})),x.addEventListener("click",(function(){X.open(),J.resetValidation()}));var Z=new b({popupSelector:".popup_change_profile",submitForm:function(e){Z.updateButtonState("Сохранение..."),K.sendDataProfile({name:R.value,activity:D.value}).then((function(e){Y.setUserInfo({name:e.name,about:e.about})})).catch((function(e){alert(e)})).finally((function(){Z.updateButtonState("Сохранить")}))}});Z.setEventListeners(),document.querySelector(".profile__ikon").addEventListener("click",(function(){$.open(),G.resetValidation()}));var $=new b({popupSelector:".popup_change_avatar",submitForm:function(e){$.updateButtonState("Сохранение..."),K.sendAvatarProfile(e.linkavatar).then((function(e){Y.setUserInfo({avatar:e.avatar})})).catch((function(e){alert(e)})).finally((function(){$.updateButtonState("Сохранить")}))}});$.setEventListeners()})();