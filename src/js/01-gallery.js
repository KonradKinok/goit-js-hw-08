'use strict';
//Import
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

//DOM
const list = document.querySelector('ul.gallery');

//HTML completion
galleryItems.forEach(element => {
  const listItem = document.createElement('li');
  const linkItem = document.createElement('a');
  const imgItem = document.createElement('img');

  //img
  imgItem.classList = 'gallery__image';
  imgItem.src = element.preview;
  imgItem.alt = element.description;

  //a
  linkItem.classList = 'gallery__link';
  linkItem.href = element.original;

  //li
  listItem.classList = 'gallery__item';

  //append
  linkItem.appendChild(imgItem);
  listItem.appendChild(linkItem);
  list.appendChild(listItem);
});

//SimpleLightbox
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
