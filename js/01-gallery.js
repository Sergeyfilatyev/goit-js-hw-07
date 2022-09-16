import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryBox = document.querySelector('.gallery');
const markup = galleryItems
  .map(({ description, original, preview }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

galleryBox.insertAdjacentHTML('afterbegin', markup);
galleryBox.addEventListener('click', openModal);
function openModal(event) {
  event.preventDefault();
  if (event.target.classList.value !== 'gallery__image') {
    return;
  }

  const imgSrc = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imgSrc}" width="800" height="600">
    `);
  instance.show();
  window.addEventListener('keydown', closeModalEsc);
}
function closeModalEsc(event) {
  const modalImg = document.querySelector('.basicLightbox');
  if (event.key !== 'Escape') {
    return;
  }

  modalImg.remove();
  window.removeEventListener('keydown', closeModalEsc);
}
