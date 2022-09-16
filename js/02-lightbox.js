import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector('.gallery');
const markup = galleryItems
  .map(({ description, original, preview }) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}" 
      />
  </a>`;
  })
  .join('');
galleryBox.insertAdjacentHTML('afterbegin', markup);
const lightbox = new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
