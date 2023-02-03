import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')

const makeImageItemMarkup = ({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
}

const makeImageGalleryMarkup = galleryItems.map(makeImageItemMarkup).join('');

galleryEl.innerHTML = makeImageGalleryMarkup;

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600">`,
      {
        onShow: () => { document.addEventListener('keydown', closeModalWithEsc); },
        onClose: () => { document.removeEventListener('keydown', closeModalWithEsc); },
      })

  instance.show();

  function closeModalWithEsc(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
}



// console.log(makeImageGalleryMarkup);
