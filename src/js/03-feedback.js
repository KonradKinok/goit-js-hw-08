'use strict';
//Import
import throttle from 'lodash.throttle';

//DOM
const form = document.querySelector('form.feedback-form');

//LocalStorageKey
const localStorageKey = 'feedback-form-state';

//Fill in the fields after refreshing the page
fillFieldsAtBeginning(localStorageKey);

//Throttle
const throttledCallback = throttle(throttledEventListener, 500);

//Event Listeners
form.addEventListener('input', throttledCallback);

form.addEventListener('submit', event => {
  event.preventDefault();
  const formFieldsData = load(localStorageKey);
  console.log(formFieldsData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
//--------------------------------------------Event Listeners

//Functions
//Throttled input
function throttledEventListener() {
  const emailText = form.elements.email.value;
  const messageText = form.elements.message.value;

  const localStorageObject = {
    email: emailText,
    message: messageText,
  };

  save(localStorageKey, localStorageObject);
}

//Fill in the fields after refreshing the page
function fillFieldsAtBeginning(key) {
  const localStorageObject = load(key);
  if (localStorageObject) {
    form.elements.email.value = localStorageObject.email;
    form.elements.message.value = localStorageObject.message;
  }
}

//Load LocalStorage Data
function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

//Save LocalStorage Data
function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}
//------------------------------------------------Functions
