var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

// var elIdish = $_('.idish');
// var elButton = $_('button', elIdish);

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);
  
  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }
  
  if (text) {
    newElement.textContent = text;
  }
  
  return newElement;
};








var contactsArray = [];
var relationArray = [];

var elForm = document.querySelector('.js-contact-form')
if (elForm) {
  var elNameInput = document.querySelector('.js-contact-form__name-input')
  var elRelation = document.querySelector('.js-contact-form__relationship-input')
  var elDatalist = document.querySelector('#relationships-list')
  var elPhoneNumber = document.querySelector('.js-contact-form__phone-input')
  var elContactsList = document.querySelector('.js-contacts')
}

// DOM eletemlarni uzgaruvchiga olindi

elForm.addEventListener('submit', function (evt) {
  // formninig buttoni submitiga quloq solinyapti
  evt.preventDefault();
  
  
  var NameInputValue = elNameInput.value;
  var RelationValue = elRelation.value;
  var PhoneNumberValue = elPhoneNumber.value;
  // DOM elemetnlarni value sini olindi
  
  var newObject = {
    name: NameInputValue,
    rela: RelationValue,
    phone: PhoneNumberValue
  };
  // Yangi obyekt yasaldi
  
  for (var contact = 0; contact < contactsArray.length; contact++) {
    if (contactsArray[contact].phone === newObject.phone) {
      elPhoneNumber.classList.add('is-invalid');
      return;
    }
  }
  // Tushunmadim
  
  var ishere = contactsArray.includes(newObject);
  // Tushunmadim
  
  
  if (!ishere) {
    contactsArray.push(newObject);
  }
  
  
  relationArray.push(RelationValue);
  elContactsList.innerHTML = '';
  
  for (var relation of relationArray) {
    var newOption = createElement('option');
    newOption.textContent = relation;
    
    elDatalist.appendChild(newOption);
  }  
  
  
  
  contactsArray.forEach(function (contact) {
    
    
    var newContact = createElement('li');
    newContact.setAttribute('class', 'list-group-item');
    
    var newName = createElement('h3');
    newName.setAttribute('class', 'h5 text-truncate');
    newName.textContent = contact.name;
    
    var newRela = createElement('p');
    newRela.setAttribute('class', 'small mb-1');
    newRela.textContent = contact.rela;
    
    var newPhone = createElement('a');
    newPhone.textContent = contact.phone;
    newPhone.setAttribute('href', `tel:${contact.phone}`);
    
    newContact.appendChild(newName);
    newContact.appendChild(newRela);
    newContact.appendChild(newPhone);
    
    elContactsList.appendChild(newContact);
    
    elNameInput.value = '';
    elRelation.value = '';
    elPhoneNumber.value = '';
  })
  
  console.log(contactsArray);
  
})



